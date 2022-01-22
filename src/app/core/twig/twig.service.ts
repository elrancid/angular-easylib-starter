import { Injectable } from '@angular/core';
import { Loggable, LogService } from '@easylib/log';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FeathersService } from '../feathers/feathers.service';
// import { Composition } from './declarations';
import { actionCompositionsChange } from '../store/compositions/compositions.actions';
import { AppState } from '../store/core.state';
import { Paginated } from '@feathersjs/feathers';

/**
 * Simple wrapper for feathers
 */
@Injectable({
  providedIn: 'root'
})
export class TwigService extends Loggable {

  public logs = true;

  // private red5Server?: Red5Server;

  constructor(
    private store: Store<AppState>,
    private feathers: FeathersService,
  ) {
    super();
    this.log('Twig.constructor() ');
    // this.red5Server = new Red5Server();
  }
  
  public init() {
    // this.on('compositions', (compositions: Composition[]) => {
    //   this.logService.log('TwigService on compositions:', compositions);
    //   // dispath to store
    //   this.store.dispatch(actionCompositionsChange({compositions}));
    // });
  }

  // ************************** COMPOSITIONS ***********************************

  // public listCompositions(): Observable<any[] | Paginated<any>> {
  public listCompositions(): Observable<any[]> {
    this.log('Twig.listCompositions$()');
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return (this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
    .service('composition'))
    .watch()
    .find();
  }

  public createComposition(params: { [key: string]: any }): void {
    this.log('Twig.createComposition() params:', params);
    // feathers-reactive Observables are hot by default,
    // so we don't need to subscribe to make create() happen.
    this.feathers
    .service('composition')
    .create(params);
  }

  public async readComposition(eventName: string): Promise<any> {
    this.log('Twig.readComposition() TODO eventName:', eventName);
    // const { data } = await this.request('get', this.streamManager + '/' + eventName + this.accessToken);
    // return data;
  }

  public async deleteComposition(eventName: string): Promise<any> {
    this.log('Twig.deleteComposition() eventName:', eventName);
    this.feathers
    .service('composition')
    .remove(eventName);
    // const { data } = await this.request('delete', this.streamManager + '/' + eventName + this.accessToken);
    // return data;
  }

  public async suppressClient(eventName: string): Promise<any> {
    this.log('Twig.suppressClient() TODO eventName:', eventName);
    // const { data } = await this.request('get', this.streamManagerAdmin + 'broadcast-suppress-client' + this.accessToken);
    // return data;
  }

  // ******************************* MIXERS ************************************

  public async listCompositionMixer(): Promise<any> {
    this.log('Twig.listCompositionMixer() TODO');
    // const { data } = await this.request('get', this.mixer);
    // return data;
  }
  
  public async getCompositionMixer(eventName: string): Promise<any> {
    this.log('Twig.getCompositionMixer() TODO eventName:', eventName);
    // const { data } = await this.request('get', this.mixer + '/' + eventName);
    // return data;
  }

  public async updateCompositionMixer(eventName: string): Promise<any> {
    this.log('Twig.updateCompositionMixer() TODO eventName:', eventName);
    // const { data } = await this.request('post', this.mixer + '/' + eventName + '/update');
    // return data;
  }

  public async suppressClientMixer(eventName: string): Promise<any> {
    this.log('Twig.suppressClientMixer() TODO eventName:', eventName);
    // const { data } = await this.request('get', this.mixerAdmin + 'broadcast-suppress-client' + this.accessToken);
    // return data;
  }

  // ************************** EVENTS ***********************************

  public listEvents(): Observable<any[]> {
    this.log('Twig.listEvents()');
    return this.feathers
    .service('event')
    .watch()
    .find();
  }

  // public subscribeEvent(): Promise<any> {
  //   this.log('Twig.subscribeEvent()');
  //   return this.feathers
  //   .service('event')
  //   .get();
  // }

  // public createEvent(event: any): Promise<any> {
  //   this.log('Twig.deleteEvent()');
  //   return this.feathers
  //   .service('event')
  //   .create(event);
  // }

  // public patchEvent(id: string, event: any): Promise<any> {
  //   this.log('Twig.patchEvent() id:', event.id, 'event:', event);
  //   return this.feathers
  //   .service('event')
  //   .patch(id, event);
  // }

  // public deleteEvent(eventId: string): Promise<any> {
  //   this.log('Twig.deleteEvent() eventId:', eventId);
  //   return this.feathers
  //   .service('event')
  //   .remove(eventId);
  // }

}
