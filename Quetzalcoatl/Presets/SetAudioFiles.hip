Processor 
Type SynthChain ID SetAudioFiles Bypassed Gain 	      �?Balance 	        VoiceLimit 	      P@KillFadeTime 	      4@IconColour 0 packageName  BuildVersion �  EditorStates BodyShown 0 Visible 1 Solo 0 Folded 1  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors  Processor Type ScriptProcessor ID Interface Bypassed NumSliderPacks    Script Content.makeFrontInterface(600, 600);

const var AudioLoopPlayer1 = Synth.getChildSynth("Audio Loop Player1");
const var Loop1 = Synth.getAudioSampleProcessor("Audio Loop Player1");
const var FileSelect = Content.getComponent("FileSelect");
const var FileSelect1 = Content.getComponent("FileSelect1");



    inline function onFolderSelectControl(component, value)
    {
      
  FileSystem.browseForDirectory(FileSystem.Downloads, function(folder)
		{
		   if(isDefined(folder) && folder.isDirectory())
				{			
				  var folderArray = FileSystem.findFiles(folder, "*.wav", false);
				  	
	              for(file in folderArray)
	              	{
		              	file = file.toString(0);  
	              	}; 
	              	
	              	
	              	
	              	var folderArrayName = FileSystem.findFiles(folder, "*.wav", false);
	              	
	              	for(name in folderArrayName)
	              		{
		              	name = name.toString(1);  
	              		}; 
	              		
	              		
	            
	             FileSelect.set("items", folderArray.join("\n"));
	            FileSelect1.set("text", folderArrayName.join("\n"));
	            
	     //       Console.print(file.toString(0));
	             
				}	
		});		
};
    
    Content.getComponent("FolderSelect").setControlCallback(onFolderSelectControl);
    

 
  // LoopA1.setFile((f.toString(File.FullPath)));
    
    inline function onFileSelectControl(component, value)
    {
    Loop1.setFile(FileSelect.get("items").split("\n")[value-1]);
   	
    };
    
    Content.getComponent("FileSelect").setControlCallback(onFileSelectControl);
    

function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
  EditorStates BodyShown 1 Visible 1 Solo 0 contentShown 1 onInitOpen 1  ChildProcessors   Content  Control type ScriptComboBox id FileSelect value 	      0@ Control type ScriptComboBox id FileSelect1 value 	      (@ UIData  ContentProperties DeviceType 	Desktop Component 	type ScriptComboBox id FileSelect x 	      w@y 	     �B@width n   height <   max    text s-01-BleepBustersz 137-127
-01-BleepBustersz 137-32
-01-BleepBustersz 137-48
-01-BleepBustersz 137-64
-01-BleepBustersz 137-72
-01-BleepBustersz 137-96
-01-BleepBustersz 137.3-16
-02-BleepBustersz 137-127
-02-BleepBustersz 137-16
-02-BleepBustersz 137-32
-02-BleepBustersz 137-48
-02-BleepBustersz 137-64
-02-BleepBustersz 137-72
-02-BleepBustersz 137-96
-03-BleepBustersz 137-127
-03-BleepBustersz 137-16
-03-BleepBustersz 137-32
-03-BleepBustersz 137-48
-03-BleepBustersz 137-64
-03-BleepBustersz 137-72
-03-BleepBustersz 137-96
-04-BleepBustersz 137-127
-04-BleepBustersz 137-16
-04-BleepBustersz 137-32
-04-BleepBustersz 137-48
-04-BleepBustersz 137-64
-04-BleepBustersz 137-72
-04-BleepBustersz 137-96
-05-BleepBustersz 137-127
-05-BleepBustersz 137-16
-05-BleepBustersz 137-32
-05-BleepBustersz 137-48
-05-BleepBustersz 137-64
-05-BleepBustersz 137-72
-05-BleepBustersz 137-96
-06-BleepBustersz 137-127
-06-BleepBustersz 137-16
-06-BleepBustersz 137-32
-06-BleepBustersz 137-48
-06-BleepBustersz 137-64
-06-BleepBustersz 137-72
-06-BleepBustersz 137-96
-07-BleepBustersz 137-127
-07-BleepBustersz 137-16
-07-BleepBustersz 137-32
-07-BleepBustersz 137-48
-07-BleepBustersz 137-64
-07-BleepBustersz 137-72
-07-BleepBustersz 137-96
-08-BleepBustersz 137-127
-08-BleepBustersz 137-16
-08-BleepBustersz 137-32
-08-BleepBustersz 137-48
-08-BleepBustersz 137-64
-08-BleepBustersz 137-72
-08-BleepBustersz 137-96
-09-BleepBustersz 137-127
-09-BleepBustersz 137-16
-09-BleepBustersz 137-32
-09-BleepBustersz 137-48
-09-BleepBustersz 137-64
-09-BleepBustersz 137-72
-09-BleepBustersz 137-96
-10-BleepBustersz 137-127
-10-BleepBustersz 137-16
-10-BleepBustersz 137-32
-10-BleepBustersz 137-48
-10-BleepBustersz 137-64
-10-BleepBustersz 137-72
-10-BleepBustersz 137-96
-11-BleepBustersz 137-127
-11-BleepBustersz 137-16
-11-BleepBustersz 137-32
-11-BleepBustersz 137-48
-11-BleepBustersz 137-64
-11-BleepBustersz 137-72
-11-BleepBustersz 137-96
-12-BleepBustersz 137-127
-12-BleepBustersz 137-16
-12-BleepBustersz 137-32
-12-BleepBustersz 137-48
-12-BleepBustersz 137-64
-12-BleepBustersz 137-72
-12-BleepBustersz 137-96
-13-BleepBustersz 137-127
-13-BleepBustersz 137-16
-13-BleepBustersz 137-32
-13-BleepBustersz 137-48
-13-BleepBustersz 137-64
-13-BleepBustersz 137-72
-13-BleepBustersz 137-96
-14-BleepBustersz 137-127
-14-BleepBustersz 137-16
-14-BleepBustersz 137-32
-14-BleepBustersz 137-48
-14-BleepBustersz 137-64
-14-BleepBustersz 137-72
-14-BleepBustersz 137-96
-15-BleepBustersz 137-127
-15-BleepBustersz 137-16
-15-BleepBustersz 137-32
-15-BleepBustersz 137-48
-15-BleepBustersz 137-64
-15-BleepBustersz 137-72
-15-BleepBustersz 137-96
-16-BleepBustersz 137-127
-16-BleepBustersz 137-16
-16-BleepBustersz 137-32
-16-BleepBustersz 137-48
-16-BleepBustersz 137-64
-16-BleepBustersz 137-72
-16-BleepBustersz 137-96
-17-BleepBustersz 137-127
-17-BleepBustersz 137-16
-17-BleepBustersz 137-32
-17-BleepBustersz 137-48
-17-BleepBustersz 137-64
-17-BleepBustersz 137-72
-17-BleepBustersz 137-96
-18-BleepBustersz 137-127
-18-BleepBustersz 137-16
-18-BleepBustersz 137-32
-18-BleepBustersz 137-48
-18-BleepBustersz 137-64
-18-BleepBustersz 137-72
-18-BleepBustersz 137-96
-19-BleepBustersz 137-127
-19-BleepBustersz 137-16
-19-BleepBustersz 137-32
-19-BleepBustersz 137-48
-19-BleepBustersz 137-64
-19-BleepBustersz 137-72
-19-BleepBustersz 137-96
-20-BleepBustersz 137-127
-20-BleepBustersz 137-16
-20-BleepBustersz 137-32
-20-BleepBustersz 137-48
-20-BleepBustersz 137-64
-20-BleepBustersz 137-72
-20-BleepBustersz 137-96
-21-BleepBustersz 137-127
-21-BleepBustersz 137-16
-21-BleepBustersz 137-32
-21-BleepBustersz 137-48
-21-BleepBustersz 137-64
-21-BleepBustersz 137-72
-21-BleepBustersz 137-96
-22-BleepBustersz 137-127
-22-BleepBustersz 137-16
-22-BleepBustersz 137-32
-22-BleepBustersz 137-48
-22-BleepBustersz 137-64
-22-BleepBustersz 137-72
-22-BleepBustersz 137-96
-23-BleepBustersz 137-127
-23-BleepBustersz 137-16
-23-BleepBustersz 137-32
-23-BleepBustersz 137-48
-23-BleepBustersz 137-64
-23-BleepBustersz 137-72
-23-BleepBustersz 137-96
-24-BleepBustersz 137-127
-24-BleepBustersz 137-16
-24-BleepBustersz 137-32
-24-BleepBustersz 137-48
-24-BleepBustersz 137-64
-24-BleepBustersz 137-72
-24-BleepBustersz 137-96
-25-BleepBustersz 137-127
-25-BleepBustersz 137-16
-25-BleepBustersz 137-32
-25-BleepBustersz 137-48
-25-BleepBustersz 137-64
-25-BleepBustersz 137-72
-25-BleepBustersz 137-96
-26-BleepBustersz 137-127
-26-BleepBustersz 137-16
-26-BleepBustersz 137-32
-26-BleepBustersz 137-48
-26-BleepBustersz 137-64
-26-BleepBustersz 137-72
-26-BleepBustersz 137-96
-27-BleepBustersz 137-127
-27-BleepBustersz 137-16
-27-BleepBustersz 137-32
-27-BleepBustersz 137-48
-27-BleepBustersz 137-64
-27-BleepBustersz 137-72
-27-BleepBustersz 137-96
-28-BleepBustersz 137-127
-28-BleepBustersz 137-16
-28-BleepBustersz 137-32
-28-BleepBustersz 137-48
-28-BleepBustersz 137-64
-28-BleepBustersz 137-72
-28-BleepBustersz 137-96
-29-BleepBustersz 137-127
-29-BleepBustersz 137-16
-29-BleepBustersz 137-32
-29-BleepBustersz 137-48
-29-BleepBustersz 137-64
-29-BleepBustersz 137-72
-29-BleepBustersz 137-96
-30-BleepBustersz 137-127
-30-BleepBustersz 137-16
-30-BleepBustersz 137-32
-30-BleepBustersz 137-48
-30-BleepBustersz 137-64
-30-BleepBustersz 137-72
-30-BleepBustersz 137-96
-31-BleepBustersz 137-127
-31-BleepBustersz 137-16
-31-BleepBustersz 137-32
-31-BleepBustersz 137-48
-31-BleepBustersz 137-64
-31-BleepBustersz 137-72
-31-BleepBustersz 137-96
-32-BleepBustersz 137-127
-32-BleepBustersz 137-16
-32-BleepBustersz 137-32
-32-BleepBustersz 137-48
-32-BleepBustersz 137-64
-32-BleepBustersz 137-72
-32-BleepBustersz 137-96
-33-BleepBustersz 137-127
-33-BleepBustersz 137-16
-33-BleepBustersz 137-32
-33-BleepBustersz 137-48
-33-BleepBustersz 137-64
-33-BleepBustersz 137-72
-33-BleepBustersz 137-96
-34-BleepBustersz 137-127
-34-BleepBustersz 137-16
-34-BleepBustersz 137-32
-34-BleepBustersz 137-48
-34-BleepBustersz 137-64
-34-BleepBustersz 137-72
-34-BleepBustersz 137-96
-35-BleepBustersz 137-127
-35-BleepBustersz 137-16
-35-BleepBustersz 137-32
-35-BleepBustersz 137-48
-35-BleepBustersz 137-64
-35-BleepBustersz 137-72
-35-BleepBustersz 137-96
-36-BleepBustersz 137-127
-36-BleepBustersz 137-16
-36-BleepBustersz 137-32
-36-BleepBustersz 137-48
-36-BleepBustersz 137-64
-36-BleepBustersz 137-72
-36-BleepBustersz 137-96
-37-BleepBustersz 137-127
-37-BleepBustersz 137-16
-37-BleepBustersz 137-32
-37-BleepBustersz 137-48
-37-BleepBustersz 137-64
-37-BleepBustersz 137-72
-37-BleepBustersz 137-96 items �/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen01_175.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen02_165.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen03_167.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen04_170.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen05_158.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen06_169.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen07_172.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen08_165.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen09_175.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen10_135.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen11_145.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen12_137.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen13_173.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen14_175.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen15_174.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen16_167.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen17_175.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen18_178.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen19_172.wav
/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen20_164.wav  Component type ScriptButton id FolderSelect x 	     �v@y 	     �[@saveInPreset setValueOnClick width 	     �g@height 	      D@ Component 	type ScriptComboBox id FileSelect1 x �  y �   width n   height <   max    text cw_amen01_175
cw_amen02_165
cw_amen03_167
cw_amen04_170
cw_amen05_158
cw_amen06_169
cw_amen07_172
cw_amen08_165
cw_amen09_175
cw_amen10_135
cw_amen11_145
cw_amen12_137
cw_amen13_173
cw_amen14_175
cw_amen15_174
cw_amen16_167
cw_amen17_175
cw_amen18_178
cw_amen19_172
cw_amen20_164 items cw_amen01_175
cw_amen02_165
cw_amen03_167
cw_amen04_170
cw_amen05_158
cw_amen06_169
cw_amen07_172
cw_amen08_165
cw_amen09_175
cw_amen10_135
cw_amen11_145
cw_amen12_137
cw_amen13_173
cw_amen14_175
cw_amen15_174
cw_amen16_167
cw_amen17_175
cw_amen18_178
cw_amen19_172
cw_amen20_164  Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type AudioLooper ID Audio Loop Player1 Bypassed Gain 	      �?Balance 	        VoiceLimit 	      p@KillFadeTime 	      4@IconColour 0 SyncMode 	      �?PitchTracking 	      �?LoopEnabled 	      �?RootNote 	     �O@SampleStartMod 	        Reversed 	        FileName Z/Users/rick/Downloads/Amen Breaks Compilation/Amen Breaks Volume 1/WAV/cw_amen16_167.wav min     max @� loopStart     loopEnd @� EditorStates BodyShown 1 Visible 1 Solo 0 Folded 1  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors  Processor 	Type SimpleEnvelope ID DefaultEnvelope1 Bypassed Monophonic 	        Retrigger 	      �?Intensity 	      �?Attack 	      @Release 	      $@LinearMode 	      �?EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors  Processor Type ModulatorChain ID Attack Time Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� macro_controls  macro name 	Macro 1 value 	        midi_cc ���� macro name 	Macro 2 value 	        midi_cc ���� macro name 	Macro 3 value 	        midi_cc ���� macro name 	Macro 4 value 	        midi_cc ���� macro name 	Macro 5 value 	        midi_cc ���� macro name 	Macro 6 value 	        midi_cc ���� macro name 	Macro 7 value 	        midi_cc ���� macro name 	Macro 8 value 	        midi_cc ���� MidiAutomation   MPEData Enabled  