console.log("working");

interface takePhoto {
     readonly format: string;

     cameraMode: 'landscape' | 'portrait';
     filter: string;
     burstClips: number; 

     zoom: number;
     dimensions: [ x: number, y:number ];
     

     sizeInMB: number;
     focus: string;
}

interface bRoll {
     shortClip: string;
     fps: number;

     duration: number;
     device: 'iphone16' | 'dslr' | 'pixel-9';

     path: string;
     creationDate: string;

     createStory: () => void
}

type Photo = {
     filter: string;
     burstClips: number;
     zoom: number;
     camerMode: 'landscape' | 'portrait';
}

class Instagram implements takePhoto {
     constructor(
          public readonly format: 'jpg' | 'jpeg',
          
          public cameraMode: 'landscape' | 'portrait',
          public filter: string,
          public burstClips: number,

          public zoom : number,
          public dimensions: [ x: number, y:number ],

          public sizeInMB: number,
          public focus: string,
     ) {}

     reportInfo() : Photo {
          return {
               filter: this.filter,
               burstClips: this.burstClips,
               zoom: this.zoom,
               camerMode: this.cameraMode,
          }
     }
}

const hitesh = new Instagram('jpeg', 'portrait', 'black&white', 3, 2, [50, 70], 12, 'high');
console.log(hitesh.reportInfo());

class YoutubeShorts implements bRoll {
     constructor(
          public shortClip: string,
          public fps: number,

          public duration: number,
          public device: 'iphone16' | 'dslr' | 'pixel-9',

          public path: string,
          public creationDate: string,

     ) {}
     // public createStory: () => void,

     createStory(): void {
          const story = {
               device: this.device,
               date: this.creationDate,
               fps: this.fps,
               Id: this.shortClip,
          }
          console.log(story);
     }
};

const ytShort = new YoutubeShorts('hello@123', 60, 100, 'dslr', './main/dir', new Date(Date.now()).toLocaleDateString() );
// console.log();
ytShort.createStory();

export {};