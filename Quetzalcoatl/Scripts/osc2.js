const var FMenvelope1 = Synth.getModulator("FMenvelope1");
const var FMenvelope2 = Synth.getModulator("FMenvelope2");
const var FMenvelope3 = Synth.getModulator("FMenvelope3");
const var FMenvelope4 = Synth.getModulator("FMenvelope4");
const var FMenvelope5 = Synth.getModulator("FMenvelope5");
const var FMenvelope6 = Synth.getModulator("FMenvelope6");
const var FMenvelope7 = Synth.getModulator("FMenvelope7");
const var FMenvelope8 = Synth.getModulator("FMenvelope8");
const var FMenvelope9 = Synth.getModulator("FMenvelope9");
const var FMenvelope10 = Synth.getModulator("FMenvelope10");
const var FMenvelope11 = Synth.getModulator("FMenvelope11");
const var FMenvelope12 = Synth.getModulator("FMenvelope12");
const var FMenvelope13 = Synth.getModulator("FMenvelope13");
const var FMenvelope14 = Synth.getModulator("FMenvelope14");
const var FMenvelope15 = Synth.getModulator("FMenvelope15");
const var FMenvelope16 = Synth.getModulator("FMenvelope16");
const var FMenvelope17 = Synth.getModulator("FMenvelope17");
const var FMenvelope18 = Synth.getModulator("FMenvelope18");
const var FMenvelope19 = Synth.getModulator("FMenvelope19");
const var FMenvelope20 = Synth.getModulator("FMenvelope20");
const var FMenvelope21 = Synth.getModulator("FMenvelope21");
const var FMenvelope22 = Synth.getModulator("FMenvelope22");
const var FMenvelope23 = Synth.getModulator("FMenvelope23");
const var FMenvelope24 = Synth.getModulator("FMenvelope24");
const var FMenvelope25 = Synth.getModulator("FMenvelope25");
const var FMenvelope26 = Synth.getModulator("FMenvelope26");
const var FMenvelope27 = Synth.getModulator("FMenvelope27");
const var FMenvelope28 = Synth.getModulator("FMenvelope28");
const var FMenvelope29 = Synth.getModulator("FMenvelope29");
const var FMenvelope30 = Synth.getModulator("FMenvelope30");
const var FMenvelope31 = Synth.getModulator("FMenvelope31");
const var FMenvelope32 = Synth.getModulator("FMenvelope32");
const var FMenvelope33 = Synth.getModulator("FMenvelope33");
const var FMenvelope34 = Synth.getModulator("FMenvelope34");
const var FMenvelope35 = Synth.getModulator("FMenvelope35");
const var FMenvelope36 = Synth.getModulator("FMenvelope36");
const var FMenvelope37 = Synth.getModulator("FMenvelope37");
const var FMenvelope38 = Synth.getModulator("FMenvelope38");
const var FMenvelope39 = Synth.getModulator("FMenvelope39");
const var FMenvelope40 = Synth.getModulator("FMenvelope40");
const var FMenvelope41 = Synth.getModulator("FMenvelope41");
const var FMenvelope42 = Synth.getModulator("FMenvelope42");
const var FMenvelope43 = Synth.getModulator("FMenvelope43");
const var FMenvelope44 = Synth.getModulator("FMenvelope44");
const var FMenvelope45 = Synth.getModulator("FMenvelope45");
const var FMenvelope46 = Synth.getModulator("FMenvelope46");
const var FMenvelope47 = Synth.getModulator("FMenvelope47");
const var FMenvelope48 = Synth.getModulator("FMenvelope48");

const var FMAttack = Content.getComponent("FMAttack");


inline function onFMAttackControl(component, value)
{
        Envelope9.setAttribute(2, value);

	FMenvelope1.setAttribute(2, value);
	FMenvelope2.setAttribute(2, value);
	FMenvelope3.setAttribute(2, value);
	FMenvelope4.setAttribute(2, value);
	FMenvelope5.setAttribute(2, value);
	FMenvelope6.setAttribute(2, value);
	FMenvelope7.setAttribute(2, value);
	FMenvelope8.setAttribute(2, value);
	FMenvelope9.setAttribute(2, value);
	FMenvelope10.setAttribute(2, value);
	FMenvelope11.setAttribute(2, value);
	FMenvelope12.setAttribute(2, value);
	FMenvelope13.setAttribute(2, value);
	FMenvelope14.setAttribute(2, value);
	FMenvelope15.setAttribute(2, value);
	FMenvelope16.setAttribute(2, value);
	FMenvelope17.setAttribute(2, value);
	FMenvelope18.setAttribute(2, value);
	FMenvelope19.setAttribute(2, value);
	FMenvelope20.setAttribute(2, value);
	FMenvelope21.setAttribute(2, value);
	FMenvelope22.setAttribute(2, value);
	FMenvelope23.setAttribute(2, value);
	FMenvelope24.setAttribute(2, value);
	FMenvelope25.setAttribute(2, value);
	FMenvelope26.setAttribute(2, value);
	FMenvelope27.setAttribute(2, value);
	FMenvelope28.setAttribute(2, value);
	FMenvelope29.setAttribute(2, value);
	FMenvelope30.setAttribute(2, value);
	FMenvelope31.setAttribute(2, value);
	FMenvelope32.setAttribute(2, value);
	FMenvelope33.setAttribute(2, value);
	FMenvelope34.setAttribute(2, value);
	FMenvelope35.setAttribute(2, value);
	FMenvelope36.setAttribute(2, value);
	FMenvelope37.setAttribute(2, value);
	FMenvelope38.setAttribute(2, value);
	FMenvelope39.setAttribute(2, value);
	FMenvelope40.setAttribute(2, value);
	FMenvelope41.setAttribute(2, value);
	FMenvelope42.setAttribute(2, value);
	FMenvelope43.setAttribute(2, value);
	FMenvelope44.setAttribute(2, value);
	FMenvelope45.setAttribute(2, value);
	FMenvelope46.setAttribute(2, value);
	FMenvelope47.setAttribute(2, value);
	FMenvelope48.setAttribute(2, value);
};

Content.getComponent("FMAttack").setControlCallback(onFMAttackControl);

const var FMDecay = Content.getComponent("FMDecay");


inline function onFMDecayControl(component, value)
{
        Envelope9.setAttribute(5, value);

	FMenvelope1.setAttribute(5, value);
	FMenvelope2.setAttribute(5, value);
	FMenvelope3.setAttribute(5, value);
	FMenvelope4.setAttribute(5, value);
	FMenvelope5.setAttribute(5, value);
	FMenvelope6.setAttribute(5, value);
	FMenvelope7.setAttribute(5, value);
	FMenvelope8.setAttribute(5, value);
	FMenvelope9.setAttribute(5, value);
	FMenvelope10.setAttribute(5, value);
	FMenvelope11.setAttribute(5, value);
	FMenvelope12.setAttribute(5, value);
	FMenvelope13.setAttribute(5, value);
	FMenvelope14.setAttribute(5, value);
	FMenvelope15.setAttribute(5, value);
	FMenvelope16.setAttribute(5, value);
	FMenvelope17.setAttribute(5, value);
	FMenvelope18.setAttribute(5, value);
	FMenvelope19.setAttribute(5, value);
	FMenvelope20.setAttribute(5, value);
	FMenvelope21.setAttribute(5, value);
	FMenvelope22.setAttribute(5, value);
	FMenvelope23.setAttribute(5, value);
	FMenvelope24.setAttribute(5, value);
	FMenvelope25.setAttribute(5, value);
	FMenvelope26.setAttribute(5, value);
	FMenvelope27.setAttribute(5, value);
	FMenvelope28.setAttribute(5, value);
	FMenvelope29.setAttribute(5, value);
	FMenvelope30.setAttribute(5, value);
	FMenvelope31.setAttribute(5, value);
	FMenvelope32.setAttribute(5, value);
	FMenvelope33.setAttribute(5, value);
	FMenvelope34.setAttribute(5, value);
	FMenvelope35.setAttribute(5, value);
	FMenvelope36.setAttribute(5, value);
	FMenvelope37.setAttribute(5, value);
	FMenvelope38.setAttribute(5, value);
	FMenvelope39.setAttribute(5, value);
	FMenvelope40.setAttribute(5, value);
	FMenvelope41.setAttribute(5, value);
	FMenvelope42.setAttribute(5, value);
	FMenvelope43.setAttribute(5, value);
	FMenvelope44.setAttribute(5, value);
	FMenvelope45.setAttribute(5, value);
	FMenvelope46.setAttribute(5, value);
	FMenvelope47.setAttribute(5, value);
	FMenvelope48.setAttribute(5, value);
};

Content.getComponent("FMDecay").setControlCallback(onFMDecayControl);

const var FMSustan = Content.getComponent("FMSustan");


inline function onFMSustanControl(component, value)
{
        Envelope9.setAttribute(6, value);

	FMenvelope1.setAttribute(6, value);
	FMenvelope2.setAttribute(6, value);
	FMenvelope3.setAttribute(6, value);
	FMenvelope4.setAttribute(6, value);
	FMenvelope5.setAttribute(6, value);
	FMenvelope6.setAttribute(6, value);
	FMenvelope7.setAttribute(6, value);
	FMenvelope8.setAttribute(6, value);
	FMenvelope9.setAttribute(6, value);
	FMenvelope10.setAttribute(6, value);
	FMenvelope11.setAttribute(6, value);
	FMenvelope12.setAttribute(6, value);
	FMenvelope13.setAttribute(6, value);
	FMenvelope14.setAttribute(6, value);
	FMenvelope15.setAttribute(6, value);
	FMenvelope16.setAttribute(6, value);
	FMenvelope17.setAttribute(6, value);
	FMenvelope18.setAttribute(6, value);
	FMenvelope19.setAttribute(6, value);
	FMenvelope20.setAttribute(6, value);
	FMenvelope21.setAttribute(6, value);
	FMenvelope22.setAttribute(6, value);
	FMenvelope23.setAttribute(6, value);
	FMenvelope24.setAttribute(6, value);
	FMenvelope25.setAttribute(6, value);
	FMenvelope26.setAttribute(6, value);
	FMenvelope27.setAttribute(6, value);
	FMenvelope28.setAttribute(6, value);
	FMenvelope29.setAttribute(6, value);
	FMenvelope30.setAttribute(6, value);
	FMenvelope31.setAttribute(6, value);
	FMenvelope32.setAttribute(6, value);
	FMenvelope33.setAttribute(6, value);
	FMenvelope34.setAttribute(6, value);
	FMenvelope35.setAttribute(6, value);
	FMenvelope36.setAttribute(6, value);
	FMenvelope37.setAttribute(6, value);
	FMenvelope38.setAttribute(6, value);
	FMenvelope39.setAttribute(6, value);
	FMenvelope40.setAttribute(6, value);
	FMenvelope41.setAttribute(6, value);
	FMenvelope42.setAttribute(6, value);
	FMenvelope43.setAttribute(6, value);
	FMenvelope44.setAttribute(6, value);
	FMenvelope45.setAttribute(6, value);
	FMenvelope46.setAttribute(6, value);
	FMenvelope47.setAttribute(6, value);
	FMenvelope48.setAttribute(6, value);
};

Content.getComponent("FMSustan").setControlCallback(onFMSustanControl);

const var FMRel = Content.getComponent("FMRel");


inline function onFMRelControl(component, value)
{
        Envelope9.setAttribute(7, value);

	FMenvelope1.setAttribute(7, value);
	FMenvelope2.setAttribute(7, value);
	FMenvelope3.setAttribute(7, value);
	FMenvelope4.setAttribute(7, value);
	FMenvelope5.setAttribute(7, value);
	FMenvelope6.setAttribute(7, value);
	FMenvelope7.setAttribute(7, value);
	FMenvelope8.setAttribute(7, value);
	FMenvelope9.setAttribute(7, value);
	FMenvelope10.setAttribute(7, value);
	FMenvelope11.setAttribute(7, value);
	FMenvelope12.setAttribute(7, value);
	FMenvelope13.setAttribute(7, value);
	FMenvelope14.setAttribute(7, value);
	FMenvelope15.setAttribute(7, value);
	FMenvelope16.setAttribute(7, value);
	FMenvelope17.setAttribute(7, value);
	FMenvelope18.setAttribute(7, value);
	FMenvelope19.setAttribute(7, value);
	FMenvelope20.setAttribute(7, value);
	FMenvelope21.setAttribute(7, value);
	FMenvelope22.setAttribute(7, value);
	FMenvelope23.setAttribute(7, value);
	FMenvelope24.setAttribute(7, value);
	FMenvelope25.setAttribute(7, value);
	FMenvelope26.setAttribute(7, value);
	FMenvelope27.setAttribute(7, value);
	FMenvelope28.setAttribute(7, value);
	FMenvelope29.setAttribute(7, value);
	FMenvelope30.setAttribute(7, value);
	FMenvelope31.setAttribute(7, value);
	FMenvelope32.setAttribute(7, value);
	FMenvelope33.setAttribute(7, value);
	FMenvelope34.setAttribute(7, value);
	FMenvelope35.setAttribute(7, value);
	FMenvelope36.setAttribute(7, value);
	FMenvelope37.setAttribute(7, value);
	FMenvelope38.setAttribute(7, value);
	FMenvelope39.setAttribute(7, value);
	FMenvelope40.setAttribute(7, value);
	FMenvelope41.setAttribute(7, value);
	FMenvelope42.setAttribute(7, value);
	FMenvelope43.setAttribute(7, value);
	FMenvelope44.setAttribute(7, value);
	FMenvelope45.setAttribute(7, value);
	FMenvelope46.setAttribute(7, value);
	FMenvelope47.setAttribute(7, value);
	FMenvelope48.setAttribute(7, value);
	
	
	
};

Content.getComponent("FMRel").setControlCallback(onFMRelControl);

const var FMHold = Content.getComponent("FMHold");


inline function onFMHoldControl(component, value)
{
  Envelope9.setAttribute(4, value);

	FMenvelope1.setAttribute(4, value);
	FMenvelope2.setAttribute(4, value);
	FMenvelope3.setAttribute(4, value);
	FMenvelope4.setAttribute(4, value);
	FMenvelope5.setAttribute(4, value);
	FMenvelope6.setAttribute(4, value);
	FMenvelope7.setAttribute(4, value);
	FMenvelope8.setAttribute(4, value);
	FMenvelope9.setAttribute(4, value);
	FMenvelope10.setAttribute(4, value);
	FMenvelope11.setAttribute(4, value);
	FMenvelope12.setAttribute(4, value);
	FMenvelope13.setAttribute(4, value);
	FMenvelope14.setAttribute(4, value);
	FMenvelope15.setAttribute(4, value);
	FMenvelope16.setAttribute(4, value);
	FMenvelope17.setAttribute(4, value);
	FMenvelope18.setAttribute(4, value);
	FMenvelope19.setAttribute(4, value);
	FMenvelope20.setAttribute(4, value);
	FMenvelope21.setAttribute(4, value);
	FMenvelope22.setAttribute(4, value);
	FMenvelope23.setAttribute(4, value);
	FMenvelope24.setAttribute(4, value);
	FMenvelope25.setAttribute(4, value);
	FMenvelope26.setAttribute(4, value);
	FMenvelope27.setAttribute(4, value);
	FMenvelope28.setAttribute(4, value);
	FMenvelope29.setAttribute(4, value);
	FMenvelope30.setAttribute(4, value);
	FMenvelope31.setAttribute(4, value);
	FMenvelope32.setAttribute(4, value);
	FMenvelope33.setAttribute(4, value);
	FMenvelope34.setAttribute(4, value);
	FMenvelope35.setAttribute(4, value);
	FMenvelope36.setAttribute(4, value);
	FMenvelope37.setAttribute(4, value);
	FMenvelope38.setAttribute(4, value);
	FMenvelope39.setAttribute(4, value);
	FMenvelope40.setAttribute(4, value);
	FMenvelope41.setAttribute(4, value);
	FMenvelope42.setAttribute(4, value);
	FMenvelope43.setAttribute(4, value);
	FMenvelope44.setAttribute(4, value);
	FMenvelope45.setAttribute(4, value);
	FMenvelope46.setAttribute(4, value);
	FMenvelope47.setAttribute(4, value);
	FMenvelope48.setAttribute(4, value);
};

Content.getComponent("FMHold").setControlCallback(onFMHoldControl);