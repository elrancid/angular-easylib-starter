import { Event } from "../../red5/declarations";

// export interface EventState extends Event {}

// {
//   event: string,
//   transcodeEvent: boolean,
//   digest: string,
//   location: ["fra1"],
//   "mixers": [{
//     "id": "streamext-sm-auto-node-fra1-1626785939456",
//     "mixerName": "fpxdb",
//     "location": "fra1",
//     "streamName": "grid-stream",
//     "path": "streamext",
//     "destinationMixerName": "",
//     "serverAddress": "165.227.152.5",
//     "destination": "134.122.94.212",
//     "mixingLayout": "grid-of-squares",
//     "gridSize": "4x4",
//     "outputAudioGroups": "1",
//     "audioChannels": "2",
//     "audioSampleRate": "48000",
//     "width": 1280,
//     "height": 720,
//     "framerate": 30,
//     "bitrate": 1500,
//     "doForward": true,
//     "isFixedGrid": true,
//     "state": "INSERVICE",
//     "streams": [{
//       "gridPosition": 0,
//       "audioSettings": [{
//         "outputAudioGroup": 0,
//         "attenuation": 0,
//         "panning": 0
//       }],
//       "stream": "streamext/stream1_1",
//       "connectionParams": {
//         "username": "lfk28l",
//         "password": "default-password",
//         "token": "default-token"
//       }
//     }, {
//       "gridPosition": 0,
//       "audioSettings": [{
//         "outputAudioGroup": 0,
//         "attenuation": 0,
//         "panning": 0
//       }],
//       "stream": "streamext/stream1_2",
//       "connectionParams": {
//         "username": "lfk28l",
//         "password": "default-password",
//         "token": "default-token"
//       }
//     }]
//   }]
// }

export type EventsState = Event[];

// export interface EventsMessage {
//   type: 'activeEvents',
//   list: EventsState,
// }
