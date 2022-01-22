import { Injectable } from '@angular/core';
import { LogService } from '@easylib/log';
import { red5Config, Red5Config } from 'src/app/features/config';
// import { Subscriber } from '../red5/subscriber';
// import { TwigRed5Service } from './twig-red5.service';
import { EventEmitter } from 'events';
import { FeathersService } from '../feathers/feathers.service';
// @ts-ignore
// import { RTCSubscriber } from 'red5pro-webrtc-sdk';
import { RTCSubscriber } from '../red5pro-sdk/red5pro-sdk';
// import { RTCSubscriber } from 'src/app/shared/lib/red5pro/red5pro-sdk.min';

interface SubscriberConfig {
  host: string,
  protocol: string,
  port: number,
  app: string,
  streamName: string,
  mediaElementId: string,
  subscriptionId?: string,
  connectionParams: {
    username?: string,
    password?: string,
    token?: string,
    host?: string,
    app?: string,
  },
  rtcConfiguration: {
    iceServers: [{urls: string}],
    iceCandidatePoolSize: number,
    bundlePolicy: string,
  } // See https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection#RTCConfiguration_dictionary
};

@Injectable()
export class TwigSubscriberService extends EventEmitter {

  public logs = true;
  private logsSubscriberEvents = false;

  private config!: { [key: string]: any };
  private subscriber: any;
  private subscriberConfig!: SubscriberConfig;
  private streamManagerConfig!: SubscriberConfig;

  constructor(
    private logService: LogService,
    // private red5: TwigRed5Service,
    private feathers: FeathersService,
  ) {
    super();
    logService.log('TwigSubscriberService.constructor()');
    this.init(red5Config);
    this.logService.logIf(this, 'TwigSubscriberService.init() red5Config:', red5Config);
  }

  /**
   * Initialize subscriber with config object
   * @param config {
   *   role?: string = 'attendee',
   *   sm?: boolean,
   * }
   */
   public init(config: { [key: string]: any }): void {
    if (this.logs) console.log('Subscriber.init() config:', config);
    this.config = config;

    // const RETRY_DELAY = 3000
    // const appContext = `streamext` // path (context)
    // const sm = config.sm;
    // const requiresStreamManager = !sm ? false : !(sm && sm === 'false');
    // const role = config.role || undefined;
    // const streamName = role != undefined && role === 'videowall' ? 'videowall' : config.streamname + '_mainstage' || 'stream1' + '_mainstage';
    // const subscriberId = 'main-red5pro-subscriber' // replaced with angular @ViewChild('videoSubscriber')
    // const updateStatusFromEvent = window.red5proHandleSubscriberEvent; // TODO da file subcription-status.js
    // const container = document.getElementById('main-subscriber-container')
    // const subscriberStatusField = document.getElementById('main-subscriber-status-field')
    // const subscriberDetails = document.getElementById('main-subscriber-details')
    // const streamNameText = document.getElementById('main-stream-name')
    // streamNameText.innerHTML = `Subscribing to stream ${streamName}`
    // const errorInfo = document.getElementById('main-subscriber-error')
    // let subscriber
    // const {
    //   hostname,
    //   protocol
    // } = window.location

    // const userId = window.userId
    // const username = window.getParamByName('username') || userId
    // const password = window.getParamByName('password') || 'default-password'
    // const token = window.getParamByName('token') || 'default-token'
    // this.subscriberConfig = {
    //   host: config.streamManagerHost,
      // protocol: secureConnection ? 'wss' : 'ws',
      // port: secureConnection ? '443' : 5080,
    //   connectionParams: {
    //     username,
    //     password,
    //     token
    //   },
    //   streamName: streamName,
    //   mediaElementId: subscriberId
    // }
    // this.streamManagerConfig = {
    //   ...this.subscriberConfig, ...{
    //     app: 'streammanager'
    //   }
    // }
    this.emit('ready');
  }

  /**
   * 
   * @param data {
   *   streamName,
   *   scale, // broadcastScale
   *   attendeeCount,
   *   wsEndpoint,
   *   useStreamManager,
   *   path,
   * }
   */
   public async startSubscribing(data: {[key: string]: any}) {
    this.logService.logIf(this, 'TwigSubscriberService.startSubscribing() data:', data);
    try {
      this.subscriberConfig = this.getSubscriberConfigParams(data['wsEndpoint'], data['path'], data['streamName'], false);
      this.streamManagerConfig = this.getSubscriberConfigParams(this.config['streamManagerHost'], data['path'], data['streamName'], true);

      // if (this.logs) console.log('Subscriber.startSubscribing() host:', host);
      // let url: string;
      // if (data.useStreamManager) {
      //   url = `https://${this.subscriberConfig.streamManagerHost}/streammanager/api/4.0/event/list`;
      // }
      // else {
      //   host = data.wsEndpoint;
      //   url = `${protocol === 'wss' ? 'https' : 'http'}://${host}:${port}/${data.path ? data.path + '/' : ''}streams.jsp`;
      // }
      // if (this.logs) console.log('Subscriber.startSubscribing() url:', url);
      // const available = (data.useStreamManager || data.path === 'live') ? await getIsStreamAvailable(url, data.streamName, data.useStreamManager) : true
      // if (this.logs) console.log('Subscriber.startSubscribing() available:', available);

      const params = {
        protocol: this.subscriberConfig.protocol === 'wss' ? 'https' : 'http',
        host: this.subscriberConfig.host,
        port: this.subscriberConfig.port,
        path: this.subscriberConfig.app,
      }
      const eventList = await this.getEventList(data['useStreamManager'], params);
      this.logService.logIf(this, 'TwigSubscriberService.startSubscribing() eventList:', eventList);
      let available = false;
      if (data['useStreamManager']) {
        this.logService.logIf(this, 'TwigSubscriberService.startSubscribing() useStreamManager:', data['useStreamManager'], 'streamName:', data['streamName']);
        available = eventList.filter((stream: {[key: string]: any}) => {
          const result = (stream['name'] === this.subscriberConfig.streamName && stream['type'] === 'edge');
          this.logService.logIf(this, 'TwigSubscriberService.startSubscribing() stream:', stream, 'result:', result);
          return result;
        }).length > 0;
      } else {
        available = eventList.filter((stream: {[key: string]: any}) => (stream['name'] === data['streamName'])).length > 0;
      }
      this.logService.logIf(this, 'TwigSubscriberService.startSubscribing() available:', available);
      if (!available) {
        throw Error(`Stream ${data['streamName']} not available.`);
      }
      if (!this.subscriber) {

        this.subscriberConfig.subscriptionId = 'subscriber-' + Math.floor(Math.random() * 0x10000).toString(16);
        if (data['useStreamManager']) {
          // const subscriberSM = await window.streamManagerUtil.getEdge(subscriberConfig.host, appContext, subscriberConfig.streamName)
          // const subscriberSM = await this.getEventSubscribe(data.path, data.streamName);
          const subscriberSM = await this.getEventSubscribe(data['path'] + '/' + this.subscriberConfig.streamName);
          const { serverAddress } = subscriberSM;
          this.logService.logIf(this, 'TwigSubscriberService.startSubscribing() subscriberSM:', subscriberSM, 'serverAddress:', serverAddress);
          this.streamManagerConfig.connectionParams.host = serverAddress;
        }

        this.logService.logIf(this, 'TwigSubscriberService.startSubscribing() subscriberConfig:', this.subscriberConfig);
        this.logService.logIf(this, 'TwigSubscriberService.startSubscribing() streamManagerConfig:', this.streamManagerConfig);
        this.logService.logIf(this, 'TwigSubscriberService.startSubscribing() RTCSubscriber:', RTCSubscriber);
        // const sub = new red5prosdk.Red5ProSubscriber();
        const rtcSubscriber = new RTCSubscriber();
        this.logService.logIf(this, 'TwigSubscriberService.startSubscribing() rtcSubscriber:', rtcSubscriber);
        // this.subscriber = await rtcSubscriber.setPlaybackOrder(['rtc', 'rtmp', 'hls']).init({
        //   rtc: data.useStreamManager ? this.streamManagerConfig : this.subscriberConfig
        // });
        this.subscriber = await rtcSubscriber.init(data['useStreamManager'] ? this.streamManagerConfig : this.subscriberConfig);
        this.logService.logIf(this, 'TwigSubscriberService.startSubscribing() init ok...');
        this.subscriber.on('*', this.onSubscriberEvent.bind(this));
      }
      this.logService.logIf(this, 'TwigSubscriberService.startSubscribing() subscribe..');
      await this.subscriber.subscribe();
    }
    catch (error) {
      this.logService.error('TwigSubscriberService.startSubscribing() error:', error);
      // displayError(e.hasOwnProperty('message') ? e.message : e)
      // document.querySelector(`#${subscriberId}`).removeEventListener('canplay', onVideoElementPlayback)
      // addLoadingIcon(container)
      // retryConnection()
    }
  }

  private getSubscriberConfigParams(host: string, path: string, streamName: string, isStreamManager: boolean): SubscriberConfig {
    const ipReg = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    const localhostReg = /^localhost.*/;
    const isIPOrLocalhost = ipReg.exec(host) || localhostReg.exec(host);
    const secureConnection = !isIPOrLocalhost;

    const result: SubscriberConfig = {
      host,
      protocol: secureConnection ? 'wss' : 'ws',
      port: secureConnection ? 443 : 5080,
      app: isStreamManager ? 'streammanager' : path, // live?
      streamName: streamName + '_mainstage',
      mediaElementId: 'red5pro-subscriber', // 'main-red5pro-subscriber',
      connectionParams: {
        username: 'default',
        password: 'default',
        token: 'default',
      },
      rtcConfiguration: {
        iceServers: [{urls: 'stun:stun2.l.google.com:19302'}],
        iceCandidatePoolSize: 2,
        bundlePolicy: 'max-bundle'
      } // See https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection#RTCConfiguration_dictionary
    }
    if (isStreamManager) {
      result.connectionParams.app = path;
    }
    return result;
  }

  protected async getEventList(useStreamManager: boolean, params?: {[key: string]: any}): Promise<any> {
    this.logService.logIf(this, 'TwigSubscriberService.getEventList() useStreamManager:', useStreamManager, 'params:', params);
    // return await this.red5.listEvents();
    if (useStreamManager) {
      return await this.feathers
      .service('event')
      .find();
    }
    else {
      return await this.feathers
      .service('mixer')
      .find({ query: params });
    }
  }
  // protected async getEventSubscribe(path: string, streamName: string): Promise<any> {
  protected async getEventSubscribe(streamName: string): Promise<any> {
    this.logService.logIf(this, 'TwigSubscriberService.getEventSubscribe() streamName:', streamName);
    // return await this.red5.subscribeEvent(path + '/' + streamName);
    return await this.feathers
    .service('event')
    .get(streamName);
  }

  protected onSubscriberEvent(event: any): void {
    if (this.logsSubscriberEvents) this.logService.log('TwigSubscriberService.onSubscriberEvent() event:', event);
  }

}
