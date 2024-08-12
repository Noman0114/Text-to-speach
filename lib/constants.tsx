// Represents a sound model with its name and URL
export interface SoundModel {
  name: string; // The name of the sound model
  url: string;  // The URL to the model for generating sound
}

// An array of predefined sound models
const SOUND_MODELS: SoundModel[] = [
 
  {
    name: "Voicemod - Fastspeech2",
    url: "https://api-inference.huggingface.co/models/Voicemod/fastspeech2-en-male1",
  },
];

// Export the array of sound models
export default SOUND_MODELS;
