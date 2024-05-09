//Sample Loading


const var expHandler = Engine.createExpansionHandler();

const var expansions = expHandler.getExpansionList();
const var BankA1 = Content.getComponent("BankA1");
const var BankA2 = Content.getComponent("BankA2");
const var BankA3 = Content.getComponent("BankA3");
const var BankA4 = Content.getComponent("BankA4");
const var BankA5 = Content.getComponent("BankA5");
const var BankA6 = Content.getComponent("BankA6");
const var BankA7 = Content.getComponent("BankA7");
const var BankA8 = Content.getComponent("BankA8");
const var BankA9 = Content.getComponent("BankA9");

const var ExpansionSelector = Content.getComponent("ExpansionSelector");

expHandler.setAllowedExpansionTypes([expHandler.FileBased, 
                                     expHandler.Intermediate, 
                                     expHandler.Encrypted]);

                                     
const var expansionNames = [];

expansionNames.push("FACTORY");

for(e in expHandler.getExpansionList())
    expansionNames.push(e.getProperties().Name);


ExpansionSelector.set("items", expansionNames.join("\n"));




inline function onExpansionSelectorControl(component, value)
{
	local expansionToLoad = component.getItemText();
	

	if(expansionToLoad == expansionNames[0])
        expansionToLoad = "";
    
	expHandler.setCurrentExpansion(expansionToLoad);
};

Content.getComponent("ExpansionSelector").setControlCallback(onExpansionSelectorControl);

var sampleMaps = Sampler.getSampleMapList();
var sampleMapsed = Sampler.getSampleMapList();



inline function newcombobox(newExpansion)
{

       if(isDefined(newExpansion))
        
       
    {
        local cx = expHandler.getCurrentExpansion();
        sampleMaps = cx.getSampleMapList();
        sampleMapsed = cx.getSampleMapList();
        local expansionProps = cx.getProperties();
        local expName = expansionProps.Name;
        
        for (i = 0; i < sampleMapsed.length; i++)
        {
        sampleMapsed[i] = sampleMapsed[i].replace("{EXP::");
        sampleMapsed[i] = sampleMapsed[i].replace("}");
        sampleMapsed[i] = sampleMapsed[i].replace(expName);

        }
       
        BankA1.set("items", "");
        BankA1.set("items", sampleMapsed.join("\n"));
        BankA2.set("items", "");
       	BankA2.set("items", sampleMapsed.join("\n"));
       	BankA3.set("items", "");
       	BankA3.set("items", sampleMapsed.join("\n"));
        BankA4.set("items", "");
      	BankA4.set("items", sampleMapsed.join("\n"));
      	BankA5.set("items", "");
      	BankA5.set("items", sampleMapsed.join("\n"));
      	BankA6.set("items", "");
      	BankA6.set("items", sampleMapsed.join("\n"));
      	BankA7.set("items", "");
      	BankA7.set("items", sampleMapsed.join("\n"));
      	BankA8.set("items", "");
        BankA8.set("items", sampleMapsed.join("\n"));
BankA9.set("items", "");
        BankA9.set("items", sampleMapsed.join("\n"));       
       
       

    }
    
    else
    
    {
        sampleMaps = Sampler.getSampleMapList();
        BankA1.set("items", "");
        BankA1.set("items", sampleMaps.join("\n"));
        BankA2.set("items", "");
       	BankA2.set("items", sampleMaps.join("\n"));
       	BankA3.set("items", "");
       	BankA3.set("items", sampleMaps.join("\n"));
        BankA4.set("items", "");
      	BankA4.set("items", sampleMaps.join("\n"));
      	BankA5.set("items", "");
      	BankA5.set("items", sampleMaps.join("\n"));
      	BankA6.set("items", "");
      	BankA6.set("items", sampleMaps.join("\n"));
      	BankA7.set("items", "");
      	BankA7.set("items", sampleMaps.join("\n"));
      	BankA8.set("items", "");
        BankA8.set("items", sampleMaps.join("\n"));
	BankA9.set("items", "");
        BankA9.set("items", sampleMaps.join("\n"));
        

    }
    
    
}

expHandler.setExpansionCallback(newcombobox);

newcombobox(undefined);

const samplemaps = Sampler.getSampleMapList();


inline function onBankA1Control(component, value)
{

  SamplerA1.loadSampleMap(sampleMaps[value-1]);
   slotA1.loadFile("{XYZ::SampleMap}" + component.getItemText());
  
  	Sample1.set("text",BankA1.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
  	
};

Content.getComponent("BankA1").setControlCallback(onBankA1Control);

inline function onBankA2Control(component, value)
{

	SamplerA2.loadSampleMap(sampleMaps[value-1]); slotA2.loadFile("{XYZ::SampleMap}" + component.getItemText());
   Sample2.set("text",BankA2.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
  

};

Content.getComponent("BankA2").setControlCallback(onBankA2Control);

inline function onBankA3Control(component, value)
{

   SamplerA3.loadSampleMap(sampleMaps[value-1]);
   slotA3.loadFile("{XYZ::SampleMap}" + component.getItemText());
  Sample3.set("text",BankA3.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);

};

Content.getComponent("BankA3").setControlCallback(onBankA3Control);

inline function onBankA4Control(component, value)
{

   SamplerA4.loadSampleMap(sampleMaps[value-1]);
 slotA4.loadFile("{XYZ::SampleMap}" + component.getItemText());
    
    Sample4.set("text",BankA4.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
  

};

Content.getComponent("BankA4").setControlCallback(onBankA4Control);

inline function onBankA5Control(component, value)
{

   SamplerA5.loadSampleMap(sampleMaps[value-1]);
   slotA5.loadFile("{XYZ::SampleMap}" + component.getItemText());
 
  
	Sample5.set("text",BankA5.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
};

Content.getComponent("BankA5").setControlCallback(onBankA5Control);

inline function onBankA6Control(component, value)
{

   SamplerA6.loadSampleMap(sampleMaps[value-1]);
 slotA6.loadFile("{XYZ::SampleMap}" + component.getItemText());
 
	Sample6.set("text",BankA6.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
};

Content.getComponent("BankA6").setControlCallback(onBankA6Control);

inline function onBankA7Control(component, value)
{

   SamplerA7.loadSampleMap(sampleMaps[value-1]);
   slotA7.loadFile("{XYZ::SampleMap}" + component.getItemText());
  
    Sample7.set("text",BankA7.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
  

};

Content.getComponent("BankA7").setControlCallback(onBankA7Control);

inline function onBankA8Control(component, value)
{

   SamplerA8.loadSampleMap(sampleMaps[value-1]);
   slotA8.loadFile("{XYZ::SampleMap}" + component.getItemText());
 
  Sample8.set("text",BankA8.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);

};

Content.getComponent("BankA8").setControlCallback(onBankA8Control);



inline function onBankA9Control(component, value)
{

   slotB1.loadFile("{XYZ::SampleMap}" + component.getItemText());
   slotB2.loadFile("{XYZ::SampleMap}" + component.getItemText());
   slotB3.loadFile("{XYZ::SampleMap}" + component.getItemText());
   slotB4.loadFile("{XYZ::SampleMap}" + component.getItemText());
   slotB5.loadFile("{XYZ::SampleMap}" + component.getItemText());
   slotB6.loadFile("{XYZ::SampleMap}" + component.getItemText());
   slotB7.loadFile("{XYZ::SampleMap}" + component.getItemText());
   slotB8.loadFile("{XYZ::SampleMap}" + component.getItemText());
   
  Sample9.set("text",BankA9.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);

};

Content.getComponent("BankA9").setControlCallback(onBankA9Control);


inline function onLpLoad1Control(component, value)
{
if (value)
		{
		FileSystem.browse (FileSystem.AudioFiles, false, "*.wav,*.aif ", function (f) 
	{
				LoopA1.setFile((f.toString(File.FullPath)));
				Sample1.set("text", f.toString(f.NoExtension));	
							
	});	
	

	

}
};

Content.getComponent("LpLoad1").setControlCallback(onLpLoad1Control);

inline function onLpLoad2Control(component, value)
{
if (value)
		{
		FileSystem.browse (FileSystem.AudioFiles, false, "*.wav,*.aif ", function (f) 
	{
				LoopA2.setFile( (f.toString(File.FullPath)));
				Sample2.set("text", f.toString(f.NoExtension));	
	});	
	

}
};

Content.getComponent("LpLoad2").setControlCallback(onLpLoad2Control);

inline function onLpLoad3Control(component, value)
{
if (value)
		{
		FileSystem.browse (FileSystem.AudioFiles, false, "*.wav,*.aif ", function (f) 
	{
				LoopA3.setFile( (f.toString(File.FullPath)));
				Sample3.set("text", f.toString(f.NoExtension));	
	});	

}
};

Content.getComponent("LpLoad3").setControlCallback(onLpLoad3Control);

inline function onLpLoad4Control(component, value)
{
if (value)
		{
		FileSystem.browse (FileSystem.AudioFiles, false, "*.wav,*.aif ", function (f) 
	{
				LoopA4.setFile( (f.toString(File.FullPath)));
				Sample4.set("text", f.toString(f.NoExtension));	
	});	

}
};

Content.getComponent("LpLoad4").setControlCallback(onLpLoad4Control);

inline function onLpLoad5Control(component, value)
{
if (value)
		{
		FileSystem.browse (FileSystem.AudioFiles, false, "*.wav,*.aif ", function (f) 
	{
				LoopA5.setFile( (f.toString(File.FullPath)));
				Sample5.set("text", f.toString(f.NoExtension));	
	});	
	

}
};

Content.getComponent("LpLoad5").setControlCallback(onLpLoad5Control);

inline function onLpLoad6Control(component, value)
{
if (value)
		{
		FileSystem.browse (FileSystem.AudioFiles, false, "*.wav,*.aif ", function (f) 
	{
				LoopA6.setFile( (f.toString(File.FullPath)));
				Sample6.set("text", f.toString(f.NoExtension));	
	});	

}
};

Content.getComponent("LpLoad6").setControlCallback(onLpLoad6Control);

inline function onLpLoad7Control(component, value)
{
if (value)
		{
		FileSystem.browse (FileSystem.AudioFiles, false, "*.wav,*.aif ", function (f) 
	{
				LoopA7.setFile( (f.toString(File.FullPath)));
				Sample7.set("text", f.toString(f.NoExtension));	
	});	

}
};

Content.getComponent("LpLoad7").setControlCallback(onLpLoad7Control);

inline function onLpLoad8Control(component, value)
{
if (value)
		{
		FileSystem.browse (FileSystem.AudioFiles, false, "*.wav,*.aif ", function (f) 
	{
				LoopA8.setFile( (f.toString(File.FullPath)));
				Sample8.set("text", f.toString(f.NoExtension));	
	});	

}
};

Content.getComponent("LpLoad8").setControlCallback(onLpLoad8Control);

inline function onSampleMode1Control(component, value)
{
if(value == 1)
	{
	
//sampler

	Sampler1.setBypassed(0);
	Waves1.showControl(1);
	SampleWave1.showControl(1);	
	
//Loop	
	
	loop1.setBypassed(1);
	
	UserWave1.showControl(0);
	LpControls1.showControl(0);
	
//WT	
	
	WtA1.setBypassed(1);
	Wt1.showControl(0);
	
	TableView1.showControl(0);


//FM
	
	Fm1.setBypassed(1);

	
	FmWaves1.showControl(0);
	
	
	
	
	Sample1.set("text",BankA1.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
	
	}
if(value == 2)
	{
	
	//sampler
	
		Sampler1.setBypassed(1);
		Waves1.showControl(0);
		SampleWave1.showControl(0);	
		
	//Loop	
		
		loop1.setBypassed(0);
		
		UserWave1.showControl(1);
		LpControls1.showControl(1);
		
	//WT	
		
		WtA1.setBypassed(1);
		Wt1.showControl(0);
		
		TableView1.showControl(0);
	
	//FM
		
		Fm1.setBypassed(1);
	
		
		FmWaves1.showControl(0);

	
	Sample1.set("text",Lwav1.getFilename().replace(".wav").replace(".aif").replace("{PROJECT_FOLDER}").replace("Single Cycle").replace("Roland Jupiter 4").replace("Loops").replace("DronesChords"));
	
	}
	
	if(value == 3)
		{
		//sampler
	
		Sampler1.setBypassed(1);
		Waves1.showControl(0);
		
	//Loop	
		
		loop1.setBypassed(1);
		
		UserWave1.showControl(0);
		LpControls1.showControl(0);
		
	//WT	
		
		WtA1.setBypassed(0);
		Wt1.showControl(1);
		
		TableView1.showControl(1);
	
	//FM
		
		Fm1.setBypassed(1);
		SampleWave1.showControl(0);	
		
		FmWaves1.showControl(0);
		
		
		
		}		
		
		
		if(value == 4)
			{
			//sampler
	
		Sampler1.setBypassed(1);
		Waves1.showControl(0);
		
	//Loop	
		
		loop1.setBypassed(1);
		
		UserWave1.showControl(0);
		LpControls1.showControl(0);
		
	//WT	
		
		WtA1.setBypassed(1);
		Wt1.showControl(0);
		
		TableView1.showControl(0);
	
	//FM
		
		Fm1.setBypassed(0);
		SampleWave1.showControl(1);	
		
		FmWaves1.showControl(1);
		
			
			}		

};

Content.getComponent("SampleMode1").setControlCallback(onSampleMode1Control);

inline function onSampleMode2Control(component, value)
{
if(value == 1)
	{
	
//sampler

	Sampler2.setBypassed(0);
	Waves2.showControl(1);
	
//Loop	
	
	loop2.setBypassed(1);
	
	UserWave2.showControl(0);
	LpControls2.showControl(0);
	
//WT	
	
	WtA2.setBypassed(1);
	Wt2.showControl(0);
	
	TableView2.showControl(0);

//FM
	
	Fm2.setBypassed(1);
	SampleWave2.showControl(1);	
	
	FmWaves2.showControl(0);
	
	
	Sample2.set("text",BankA2.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
	
	}
if(value == 2)
	{
	
	//sampler
	
		Sampler2.setBypassed(1);
		Waves2.showControl(0);
		
	//Loop	
		
		loop2.setBypassed(0);
		
		UserWave2.showControl(1);
		LpControls2.showControl(1);
		
	//WT	
		
		WtA2.setBypassed(1);
		Wt2.showControl(0);
		
		TableView2.showControl(0);
	
	//FM
		
		Fm2.setBypassed(1);
		SampleWave2.showControl(0);	
		
		FmWaves2.showControl(0);

	
	Sample2.set("text",Lwav2.getFilename().replace(".wav").replace(".aif").replace("{PROJECT_FOLDER}").replace("Single Cycle").replace("Roland Jupiter 4").replace("Loops").replace("DronesChords"));
	
	}
	
	if(value == 3)
		{
		//sampler
	
		Sampler2.setBypassed(1);
		Waves2.showControl(0);
		
	//Loop	
		
		loop2.setBypassed(1);
		
		UserWave2.showControl(0);
		LpControls2.showControl(0);
		
	//WT	
		
		WtA2.setBypassed(0);
		Wt2.showControl(1);
		
		TableView2.showControl(1);
	
	//FM
		
		Fm2.setBypassed(1);
		SampleWave2.showControl(0);	
		
		FmWaves2.showControl(0);
		
		
		
		}		
		
		
		if(value == 4)
			{
			//sampler
	
		Sampler2.setBypassed(1);
		Waves2.showControl(0);
		
	//Loop	
		
		loop2.setBypassed(1);
		
		UserWave2.showControl(0);
		LpControls2.showControl(0);
		
	//WT	
		
		WtA2.setBypassed(1);
		Wt2.showControl(0);
		
		TableView2.showControl(0);
	
	//FM
		
		Fm2.setBypassed(0);
		SampleWave2.showControl(1);	
		
		FmWaves2.showControl(1);
		
		
			
			}		

};

Content.getComponent("SampleMode2").setControlCallback(onSampleMode2Control);

inline function onSampleMode3Control(component, value)
{
if(value == 1)
	{
	
//sampler

	Sampler3.setBypassed(0);
	Waves3.showControl(1);
	
//Loop	
	
	loop3.setBypassed(1);
	
	UserWave3.showControl(0);
	LpControls3.showControl(0);
	
//WT	
	
	WtA3.setBypassed(1);
	Wt3.showControl(0);
	
	TableView3.showControl(0);

//FM
	
	Fm3.setBypassed(1);
	SampleWave3.showControl(1);	
	
	FmWaves3.showControl(0);

	
	
	Sample3.set("text",BankA3.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
	
	}
if(value == 2)
	{
	
	//sampler
	
		Sampler3.setBypassed(1);
		Waves3.showControl(0);
		
	//Loop	
		
		loop3.setBypassed(0);
		
		UserWave3.showControl(1);
		LpControls3.showControl(1);
		
	//WT	
		
		WtA3.setBypassed(1);
		Wt3.showControl(0);
		
		TableView3.showControl(0);
	
	//FM
		
		Fm3.setBypassed(1);
		SampleWave3.showControl(0);	
		
		FmWaves3.showControl(0);
		

	
	Sample3.set("text",Lwav3.getFilename().replace(".wav").replace(".aif").replace("{PROJECT_FOLDER}").replace("Single Cycle").replace("Roland Jupiter 4").replace("Loops").replace("DronesChords"));
	
	}
	
	if(value == 3)
		{
		//sampler
	
		Sampler3.setBypassed(1);
		Waves3.showControl(0);
		
	//Loop	
		
		loop3.setBypassed(1);
		
		UserWave3.showControl(0);
		LpControls3.showControl(0);
		
	//WT	
		
		WtA3.setBypassed(0);
		Wt3.showControl(1);
		
		TableView3.showControl(1);
	
	//FM
		
		Fm3.setBypassed(1);
		SampleWave3.showControl(0);	
		
		FmWaves3.showControl(0);
		
		
		}		
		
		
		if(value == 4)
			{
			//sampler
	
		Sampler3.setBypassed(1);
		Waves3.showControl(0);
		
	//Loop	
		
		loop3.setBypassed(1);
		
		UserWave3.showControl(0);
		LpControls3.showControl(0);
		
	//WT	
		
		WtA3.setBypassed(1);
		Wt3.showControl(0);
		
		TableView3.showControl(0);
	
	//FM
		
		Fm3.setBypassed(0);
		SampleWave3.showControl(1);	
		
		FmWaves3.showControl(1);
		
			
			}		

};

Content.getComponent("SampleMode3").setControlCallback(onSampleMode3Control);

inline function onSampleMode4Control(component, value)
{
if(value == 1)
	{
	
//sampler

	Sampler4.setBypassed(0);
	Waves4.showControl(1);
	
//Loop	
	
	loop4.setBypassed(1);
	
	UserWave4.showControl(0);
	LpControls4.showControl(0);
	
//WT	
	
	WtA4.setBypassed(1);
	Wt4.showControl(0);
	
	TableView4.showControl(0);

//FM
	
	Fm4.setBypassed(1);
	SampleWave4.showControl(1);	
	
	FmWaves4.showControl(0);
	ScriptImage2.showControl(1);
	
	
	
	
	Sample4.set("text",BankA4.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
	
	}
if(value == 2)
	{
	
	//sampler
	
		Sampler4.setBypassed(1);
		Waves4.showControl(0);
		
	//Loop	
		
		loop4.setBypassed(0);
		
		UserWave4.showControl(1);
		LpControls4.showControl(1);
		
	//WT	
		
		WtA4.setBypassed(1);
		Wt4.showControl(0);
		
		TableView4.showControl(0);
	
	//FM
		
		Fm4.setBypassed(1);
		SampleWave4.showControl(0);	
		
		FmWaves4.showControl(0);

	
	Sample4.set("text",Lwav4.getFilename().replace(".wav").replace(".aif").replace("{PROJECT_FOLDER}").replace("Single Cycle").replace("Roland Jupiter 4").replace("Loops").replace("DronesChords"));
	
	}
	
	if(value == 3)
		{
		//sampler
	
		Sampler4.setBypassed(1);
		Waves4.showControl(0);
		
	//Loop	
		
		loop4.setBypassed(1);
		
		UserWave4.showControl(0);
		LpControls4.showControl(0);
		
	//WT	
		
		WtA4.setBypassed(0);
		Wt4.showControl(1);
		
		TableView4.showControl(1);
	
	//FM
		
		Fm4.setBypassed(1);
		SampleWave4.showControl(0);	
		
		FmWaves4.showControl(0);
		
		
		}		
		
		
		if(value == 4)
			{
			//sampler
	
		Sampler4.setBypassed(1);
		Waves4.showControl(0);
		
	//Loop	
		
		loop4.setBypassed(1);
		
		UserWave4.showControl(0);
		LpControls4.showControl(0);
		
	//WT	
		
		WtA4.setBypassed(1);
		Wt4.showControl(0);
		
		TableView4.showControl(1);
	
	//FM
		
		Fm4.setBypassed(0);
		SampleWave4.showControl(1);	
		
		FmWaves4.showControl(1);
		
			
			}		

};

Content.getComponent("SampleMode4").setControlCallback(onSampleMode4Control);


inline function onSampleMode5Control(component, value)
{
if(value == 1)
	{
	
//sampler

	Sampler5.setBypassed(0);
	Waves5.showControl(1);
	
//Loop	
	
	loop5.setBypassed(1);
	
	UserWave5.showControl(0);
	LpControls5.showControl(0);
	
//WT	
	
	WtA5.setBypassed(1);
	Wt5.showControl(0);
	
	TableView5.showControl(0);

//FM
	
	Fm5.setBypassed(1);
	SampleWave5.showControl(1);	
	

	
	
	
	
	Sample5.set("text",BankA5.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
	
	}
if(value == 2)
	{
	
	//sampler
	
		Sampler5.setBypassed(1);
		Waves5.showControl(0);
		
	//Loop	
		
		loop5.setBypassed(0);
		
		UserWave5.showControl(1);
		LpControls5.showControl(1);
		
	//WT	
		
		WtA5.setBypassed(1);
		Wt5.showControl(0);
		
		TableView5.showControl(0);
	
	//FM
		
		Fm5.setBypassed(1);
		SampleWave5.showControl(0);	
		
		FmWaves5.showControl(0);

	
	Sample5.set("text",Lwav5.getFilename().replace(".wav").replace(".aif").replace("{PROJECT_FOLDER}").replace("Single Cycle").replace("Roland Jupiter 4").replace("Loops").replace("DronesChords"));
	
	}
	
	if(value == 3)
		{
		//sampler
	
		Sampler5.setBypassed(1);
		Waves5.showControl(0);
		
	//Loop	
		
		loop5.setBypassed(1);
		
		UserWave5.showControl(0);
		LpControls5.showControl(0);
		
	//WT	
		
		WtA5.setBypassed(0);
		Wt5.showControl(1);
		
		TableView5.showControl(1);
	
	//FM
		
		Fm5.setBypassed(1);
		SampleWave5.showControl(0);	
		
		FmWaves5.showControl(0);
		
		
		
		}		
		
		
		if(value == 4)
			{
			//sampler
	
		Sampler5.setBypassed(1);
		Waves5.showControl(0);
		
	//Loop	
		
		loop5.setBypassed(1);
		
		UserWave5.showControl(0);
		LpControls5.showControl(0);
		
	//WT	
		
		WtA5.setBypassed(1);
		Wt5.showControl(0);
		
		TableView5.showControl(0);
	
	//FM
		
		Fm5.setBypassed(0);
		SampleWave5.showControl(1);	
		
		FmWaves5.showControl(1);
		
		
			
			}	
};

Content.getComponent("SampleMode5").setControlCallback(onSampleMode5Control);



inline function onSampleMode6Control(component, value)
{
if(value == 1)
	{
	
//sampler

	Sampler6.setBypassed(0);
	Waves6.showControl(1);
	
//Loop	
	
	loop6.setBypassed(1);
	
	UserWave6.showControl(0);
	LpControls6.showControl(0);
	
//WT	
	
	WtA6.setBypassed(1);
	Wt6.showControl(0);
	
	TableView6.showControl(0);

//FM
	
	Fm6.setBypassed(1);
	SampleWave6.showControl(1);	
	
	FmWaves6.showControl(0);

	
	
	
	
	Sample6.set("text",BankA6.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
	
	}
if(value == 2)
	{
	
	//sampler
	
		Sampler6.setBypassed(1);
		Waves6.showControl(0);
		
	//Loop	
		
		loop6.setBypassed(0);
		
		UserWave6.showControl(1);
		LpControls6.showControl(1);
		
	//WT	
		
		WtA6.setBypassed(1);
		Wt6.showControl(0);
		
		TableView6.showControl(0);
	
	//FM
		
		Fm6.setBypassed(1);
		SampleWave6.showControl(0);	
		
		FmWaves6.showControl(0);

	
	Sample6.set("text",Lwav6.getFilename().replace(".wav").replace(".aif").replace("{PROJECT_FOLDER}").replace("Single Cycle").replace("Roland Jupiter 4").replace("Loops").replace("DronesChords"));
	
	}
	
	if(value == 3)
		{
		//sampler
	
		Sampler6.setBypassed(1);
		Waves6.showControl(0);
		
	//Loop	
		
		loop6.setBypassed(1);
		
		UserWave6.showControl(0);
		LpControls6.showControl(0);
		
	//WT	
		
		WtA6.setBypassed(0);
		Wt6.showControl(1);
		
		TableView6.showControl(1);
	
	//FM
		
		Fm6.setBypassed(1);
		SampleWave6.showControl(0);	
		
		FmWaves6.showControl(0);
		
		
		}		
		
		
		if(value == 4)
			{
			//sampler
	
		Sampler6.setBypassed(1);
		Waves6.showControl(0);
		
	//Loop	
		
		loop6.setBypassed(1);
		
		UserWave6.showControl(0);
		LpControls6.showControl(0);
		
	//WT	
		
		WtA6.setBypassed(1);
		Wt6.showControl(0);
		
		TableView6.showControl(0);
	
	//FM
		
		Fm6.setBypassed(0);
		SampleWave6.showControl(1);	
		
		FmWaves6.showControl(1);

			
			}		

};

Content.getComponent("SampleMode6").setControlCallback(onSampleMode6Control);




inline function onSampleMode7Control(component, value)

{
if(value == 1)
	{
	
//sampler

	Sampler7.setBypassed(0);
	Waves7.showControl(1);
	
//Loop	
	
	loop7.setBypassed(1);
	
	UserWave7.showControl(0);
	LpControls7.showControl(0);
	
//WT	
	
	WtA7.setBypassed(1);
	Wt7.showControl(0);
	
	TableView7.showControl(0);

//FM
	
	Fm7.setBypassed(1);
	SampleWave7.showControl(1);	
	FmWaves7.showControl(0);

	
	
	
	
	Sample7.set("text",BankA7.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
	
	}
if(value == 2)
	{
	
	//sampler
	
		Sampler7.setBypassed(1);
		Waves7.showControl(0);
		
	//Loop	
		
		loop7.setBypassed(0);
		
		UserWave7.showControl(1);
		LpControls7.showControl(1);
		
	//WT	
		
		WtA7.setBypassed(1);
		Wt7.showControl(0);
		
		TableView7.showControl(0);
	
	//FM
		
		Fm7.setBypassed(1);
		SampleWave7.showControl(0);	
		
		FmWaves7.showControl(0);

	
	Sample7.set("text",Lwav7.getFilename().replace(".wav").replace(".aif").replace("{PROJECT_FOLDER}").replace("Single Cycle").replace("Roland Jupiter 4").replace("Loops").replace("DronesChords"));
	
	}
	
	if(value == 3)
		{
		//sampler
	
		Sampler7.setBypassed(1);
		Waves7.showControl(0);
		
	//Loop	
		
		loop7.setBypassed(1);
		
		UserWave7.showControl(0);
		LpControls7.showControl(0);
		
	//WT	
		
		WtA7.setBypassed(0);
		Wt7.showControl(1);
		
		TableView7.showControl(1);
	
	//FM
		
		Fm7.setBypassed(1);
		SampleWave7.showControl(0);	
		
		FmWaves7.showControl(0);
		
		
		}		
		
		
		if(value == 4)
			{
			//sampler
	
		Sampler7.setBypassed(1);
		Waves7.showControl(0);
		
	//Loop	
		
		loop7.setBypassed(1);
		
		UserWave7.showControl(0);
		LpControls7.showControl(0);
		
	//WT	
		
		WtA7.setBypassed(1);
		Wt7.showControl(0);
		
		TableView7.showControl(0);
	
	//FM
		
		Fm7.setBypassed(0);
		SampleWave7.showControl(1);	
		
		FmWaves7.showControl(1);
		
			
			}		

};

Content.getComponent("SampleMode7").setControlCallback(onSampleMode7Control);



inline function onSampleMode8Control(component, value)
{
if(value == 1)
	{
	
//sampler

	Sampler8.setBypassed(0);
	Waves8.showControl(1);
	
//Loop	
	
	loop8.setBypassed(1);
	
	UserWave8.showControl(0);
	LpControls8.showControl(0);
	
//WT	
	
	WtA8.setBypassed(1);
	Wt8.showControl(0);
	
	TableView8.showControl(0);

//FM
	
	Fm8.setBypassed(1);
	SampleWave8.showControl(1);	
	
	FmWaves8.showControl(0);

	
	Sample8.set("text",BankA8.get("items").replace("XPSaw_").replace("XPSqr_").replace("XPMisc_").replace("XPTri_").replace("XPFM_").replace("XPMisc_").replace("ST_").replace("ModShape_").replace("ModFM_").replace("ModShape_").replace("ModFiltered_").replace("K3Pluck_").replace("K3Pad_").replace("K3Lead_").replace("K3Lead_").replace("K3Keys_").replace("K3Bell_").replace("K3FX_").replace("K3Bass_").replace("CSWave_").replace("CSStrings_").replace("CSPad_").replace("CSLead_").replace("CSFX_").replace("CSKeys_").replace("CSBass_").replace("101Tri_").replace("101Sqr_").replace("101Saw_").replace("101Noise_").replace("101Ext_").split("\n")[value-1]);
	
	}
if(value == 2)
	{
	
	//sampler
	
		Sampler8.setBypassed(1);
		Waves8.showControl(0);
		
	//Loop	
		
		loop8.setBypassed(0);
		
		UserWave8.showControl(1);
		LpControls8.showControl(1);
		
	//WT	
		
		WtA8.setBypassed(1);
		Wt8.showControl(0);
		
		TableView8.showControl(0);
	
	//FM
		
		Fm8.setBypassed(1);
		SampleWave8.showControl(0);	
		
		FmWaves8.showControl(0);

	
	Sample8.set("text",Lwav8.getFilename().replace(".wav").replace(".aif").replace("{PROJECT_FOLDER}").replace("Single Cycle").replace("Roland Jupiter 4").replace("Loops").replace("DronesChords"));
	
	}
	
	if(value == 3)
		{
		//sampler
	
		Sampler8.setBypassed(1);
		Waves8.showControl(0);
		
	//Loop	
		
		loop8.setBypassed(1);
		
		UserWave8.showControl(0);
		LpControls8.showControl(0);
		
	//WT	
		
		WtA8.setBypassed(0);
		Wt8.showControl(1);
		
		TableView8.showControl(1);
	
	//FM
		
		Fm8.setBypassed(1);
		SampleWave8.showControl(0);	
		
		FmWaves8.showControl(0);
		
		
		}		
		
		
		if(value == 4)
			{
			//sampler
	
		Sampler8.setBypassed(1);
		Waves8.showControl(0);
		
	//Loop	
		
		loop8.setBypassed(1);
		
		UserWave8.showControl(0);
		LpControls8.showControl(0);
		
	//WT	
		
		WtA8.setBypassed(1);
		Wt8.showControl(0);
		
		TableView8.showControl(0);
	
	//FM
		
		Fm8.setBypassed(0);
		SampleWave8.showControl(1);	
		
		FmWaves8.showControl(1);
		
			
			}			

};

Content.getComponent("SampleMode8").setControlCallback(onSampleMode8Control);




inline function onLoadExpControl(component, value)
{
    if (value)
    {
        FileSystem.browse("", false, "", function(result)
        {
            hr = result;
	        
            FileSystem.browseForDirectory("", function(dir)
            {
                expHandler.installExpansionFromPackage(hr, dir);
            });
        });
    }
};

Content.getComponent("LoadExp").setControlCallback(onLoadExpControl);






inline function onStageSelectControl(component, value)
{
	for (i = 0; i < Waves.length; i++)
        Waves[i].showControl(value - 1 == i);
};

Content.getComponent("StageSelect").setControlCallback(onStageSelectControl);





