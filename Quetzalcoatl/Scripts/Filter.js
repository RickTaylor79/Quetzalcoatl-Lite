const var Filter1 = Synth.getEffect("Filter1");
const var Filter2 = Synth.getEffect("Filter2");
const var Filter3 = Synth.getEffect("Filter3");
const var Filter4 = Synth.getEffect("Filter4");
const var Filter5 = Synth.getEffect("Filter5");
const var Filter6 = Synth.getEffect("Filter6");
const var Filter7 = Synth.getEffect("Filter7");
const var Filter8 = Synth.getEffect("Filter8");
const var Filter9 = Synth.getEffect("Filter9");
const var Filter10 = Synth.getEffect("Filter10");
const var Filter11 = Synth.getEffect("Filter11");
const var Filter12 = Synth.getEffect("Filter12");
const var Filter13 = Synth.getEffect("Filter13");
const var Filter14 = Synth.getEffect("Filter14");
const var Filter15 = Synth.getEffect("Filter15");
const var Filter16 = Synth.getEffect("Filter16");
const var Filter17 = Synth.getEffect("Filter17");

const var Filter19 = Synth.getEffect("Filter19");
const var Filter20 = Synth.getEffect("Filter20");
const var Filter21 = Synth.getEffect("Filter21");
const var Filter22 = Synth.getEffect("Filter22");
const var Filter23 = Synth.getEffect("Filter23");
const var Filter24 = Synth.getEffect("Filter24");
const var Filter25 = Synth.getEffect("Filter25");
const var Filter26 = Synth.getEffect("Filter26");

const var Filter28 = Synth.getEffect("Filter28");
const var Filter29 = Synth.getEffect("Filter29");
const var Filter30 = Synth.getEffect("Filter30");
const var Filter31 = Synth.getEffect("Filter31");
const var Filter32 = Synth.getEffect("Filter32");
const var Filter33 = Synth.getEffect("Filter33");
const var Filter34 = Synth.getEffect("Filter34");
const var Filter35 = Synth.getEffect("Filter35");

const var Filter37 = Synth.getEffect("Filter37");
const var Filter38 = Synth.getEffect("Filter38");
const var Filter39 = Synth.getEffect("Filter39");
const var Filter40 = Synth.getEffect("Filter40");
const var Filter41 = Synth.getEffect("Filter41");
const var Filter42 = Synth.getEffect("Filter42");
const var Filter43 = Synth.getEffect("Filter43");
const var Filter44 = Synth.getEffect("Filter44");

const var Filter46 = Synth.getEffect("Filter46");
const var Filter47 = Synth.getEffect("Filter47");
const var Filter48 = Synth.getEffect("Filter48");
const var Filter49 = Synth.getEffect("Filter49");
const var Filter50 = Synth.getEffect("Filter50");
const var Filter51 = Synth.getEffect("Filter51");
const var Filter52 = Synth.getEffect("Filter52");
const var Filter53 = Synth.getEffect("Filter53");

const var Ftype = Content.getComponent("Ftype");

inline function onFtypeControl(component, value)
{
Filter1.setAttribute(Filter1.type, value);
Filter2.setAttribute(Filter2.type, value);
Filter3.setAttribute(Filter3.type, value);
Filter4.setAttribute(Filter4.type, value);
Filter5.setAttribute(Filter5.type, value);
Filter6.setAttribute(Filter6.type, value);
Filter7.setAttribute(Filter7.type, value);
Filter8.setAttribute(Filter8.type, value);
Filter9.setAttribute(Filter9.type, value);
Filter10.setAttribute(Filter10.type, value);
Filter11.setAttribute(Filter11.type, value);
Filter12.setAttribute(Filter12.type, value);
Filter13.setAttribute(Filter13.type, value);
Filter14.setAttribute(Filter14.type, value);
Filter15.setAttribute(Filter15.type, value);
Filter16.setAttribute(Filter16.type, value);
Filter17.setAttribute(Filter17.type, value);

Filter19.setAttribute(Filter19.type, value);
Filter20.setAttribute(Filter20.type, value);
Filter21.setAttribute(Filter21.type, value);
Filter22.setAttribute(Filter22.type, value);
Filter23.setAttribute(Filter23.type, value);
Filter24.setAttribute(Filter24.type, value);
Filter25.setAttribute(Filter25.type, value);
Filter26.setAttribute(Filter26.type, value);

Filter28.setAttribute(Filter28.type, value);
Filter29.setAttribute(Filter29.type, value);
Filter30.setAttribute(Filter30.type, value);
Filter31.setAttribute(Filter31.type, value);
Filter32.setAttribute(Filter32.type, value);
Filter33.setAttribute(Filter33.type, value);
Filter34.setAttribute(Filter34.type, value);
Filter35.setAttribute(Filter35.type, value);

Filter37.setAttribute(Filter37.type, value);
Filter38.setAttribute(Filter38.type, value);
Filter39.setAttribute(Filter39.type, value);
Filter40.setAttribute(Filter40.type, value);
Filter41.setAttribute(Filter41.type, value);
Filter42.setAttribute(Filter42.type, value);
Filter43.setAttribute(Filter43.type, value);
Filter44.setAttribute(Filter44.type, value);

Filter46.setAttribute(Filter46.type, value);
Filter47.setAttribute(Filter47.type, value);
Filter48.setAttribute(Filter48.type, value);
Filter49.setAttribute(Filter49.type, value);
Filter50.setAttribute(Filter50.type, value);
Filter51.setAttribute(Filter51.type, value);
Filter52.setAttribute(Filter52.type, value);
Filter53.setAttribute(Filter53.type, value);

    
     
     

}

Content.getComponent("Ftype").setControlCallback(onFtypeControl);




const var Cutoff = Content.getComponent("Cutoff");


inline function onCutoffControl(component, value)
{

Filter1.setAttribute(Filter1.cut, value);
Filter2.setAttribute(Filter2.cut, value);
Filter3.setAttribute(Filter3.cut, value);
Filter4.setAttribute(Filter4.cut, value);
Filter5.setAttribute(Filter5.cut, value);
Filter6.setAttribute(Filter6.cut, value);
Filter7.setAttribute(Filter7.cut, value);
Filter8.setAttribute(Filter8.cut, value);
Filter9.setAttribute(Filter9.cut, value);
Filter10.setAttribute(Filter10.cut, value);
Filter11.setAttribute(Filter11.cut, value);
Filter12.setAttribute(Filter12.cut, value);
Filter13.setAttribute(Filter13.cut, value);
Filter14.setAttribute(Filter14.cut, value);
Filter15.setAttribute(Filter15.cut, value);
Filter16.setAttribute(Filter16.cut, value);
Filter17.setAttribute(Filter17.cut, value);

Filter19.setAttribute(Filter19.cut, value);
Filter20.setAttribute(Filter20.cut, value);
Filter21.setAttribute(Filter21.cut, value);
Filter22.setAttribute(Filter22.cut, value);
Filter23.setAttribute(Filter23.cut, value);
Filter24.setAttribute(Filter24.cut, value);
Filter25.setAttribute(Filter25.cut, value);
Filter26.setAttribute(Filter26.cut, value);

Filter28.setAttribute(Filter28.cut, value);
Filter19.setAttribute(Filter29.cut, value);
Filter30.setAttribute(Filter30.cut, value);
Filter31.setAttribute(Filter31.cut, value);
Filter32.setAttribute(Filter32.cut, value);
Filter33.setAttribute(Filter33.cut, value);
Filter34.setAttribute(Filter34.cut, value);
Filter35.setAttribute(Filter35.cut, value);

Filter37.setAttribute(Filter37.cut, value);
Filter38.setAttribute(Filter38.cut, value);
Filter39.setAttribute(Filter39.cut, value);
Filter40.setAttribute(Filter40.cut, value);
Filter41.setAttribute(Filter41.cut, value);
Filter42.setAttribute(Filter42.cut, value);
Filter43.setAttribute(Filter43.cut, value);
Filter44.setAttribute(Filter44.cut, value);

Filter46.setAttribute(Filter46.cut, value);
Filter47.setAttribute(Filter47.cut, value);
Filter48.setAttribute(Filter48.cut, value);
Filter49.setAttribute(Filter49.cut, value);
Filter50.setAttribute(Filter50.cut, value);
Filter51.setAttribute(Filter51.cut, value);
Filter52.setAttribute(Filter52.cut, value);
Filter53.setAttribute(Filter53.cut, value);

};

Content.getComponent("Cutoff").setControlCallback(onCutoffControl);

const var Resonance = Content.getComponent("Resonance");

inline function onResonanceControl(component, value)
{
Filter1.setAttribute(Filter1.res, value);
Filter2.setAttribute(Filter2.res, value);
Filter3.setAttribute(Filter3.res, value);
Filter4.setAttribute(Filter4.res, value);
Filter5.setAttribute(Filter5.res, value);
Filter6.setAttribute(Filter6.res, value);
Filter7.setAttribute(Filter7.res, value);
Filter8.setAttribute(Filter8.res, value);
Filter9.setAttribute(Filter9.res, value);
Filter10.setAttribute(Filter10.res, value);
Filter11.setAttribute(Filter11.res, value);
Filter12.setAttribute(Filter12.res, value);
Filter13.setAttribute(Filter13.res, value);
Filter14.setAttribute(Filter14.res, value);
Filter15.setAttribute(Filter15.res, value);
Filter16.setAttribute(Filter16.res, value);
Filter17.setAttribute(Filter17.res, value);

Filter19.setAttribute(Filter19.res, value);
Filter20.setAttribute(Filter20.res, value);
Filter21.setAttribute(Filter21.res, value);
Filter22.setAttribute(Filter22.res, value);
Filter23.setAttribute(Filter23.res, value);
Filter24.setAttribute(Filter24.res, value);
Filter25.setAttribute(Filter25.res, value);
Filter26.setAttribute(Filter26.res, value);

Filter28.setAttribute(Filter28.res, value);
Filter19.setAttribute(Filter29.res, value);
Filter30.setAttribute(Filter30.res, value);
Filter31.setAttribute(Filter31.res, value);
Filter32.setAttribute(Filter32.res, value);
Filter33.setAttribute(Filter33.res, value);
Filter34.setAttribute(Filter34.res, value);
Filter35.setAttribute(Filter35.res, value);

Filter37.setAttribute(Filter37.res, value);
Filter38.setAttribute(Filter38.res, value);
Filter39.setAttribute(Filter39.res, value);
Filter40.setAttribute(Filter40.res, value);
Filter41.setAttribute(Filter41.res, value);
Filter42.setAttribute(Filter42.res, value);
Filter43.setAttribute(Filter43.res, value);
Filter44.setAttribute(Filter44.res, value);

Filter46.setAttribute(Filter46.res, value);
Filter47.setAttribute(Filter47.res, value);
Filter48.setAttribute(Filter48.res, value);
Filter49.setAttribute(Filter49.res, value);
Filter50.setAttribute(Filter50.res, value);
Filter51.setAttribute(Filter51.res, value);
Filter52.setAttribute(Filter52.res, value);
Filter53.setAttribute(Filter53.res, value);

};

Content.getComponent("Resonance").setControlCallback(onResonanceControl);

const var FEnvMod = Content.getComponent("FEnvMod");


inline function onFEnvModControl(component, value)
{
Filter1.setAttribute(Filter1.envmod, value);
Filter2.setAttribute(Filter2.envmod, value);
Filter3.setAttribute(Filter3.envmod, value);
Filter4.setAttribute(Filter4.envmod, value);
Filter5.setAttribute(Filter5.envmod, value);
Filter6.setAttribute(Filter6.envmod, value);
Filter7.setAttribute(Filter7.envmod, value);
Filter8.setAttribute(Filter8.envmod, value);
Filter9.setAttribute(Filter9.envmod, value);
Filter10.setAttribute(Filter10.envmod, value);
Filter11.setAttribute(Filter11.envmod, value);
Filter12.setAttribute(Filter12.envmod, value);
Filter13.setAttribute(Filter13.envmod, value);
Filter14.setAttribute(Filter14.envmod, value);
Filter15.setAttribute(Filter15.envmod, value);
Filter16.setAttribute(Filter16.envmod, value);
Filter17.setAttribute(Filter17.envmod, value);

Filter19.setAttribute(Filter19.envmod, value);
Filter20.setAttribute(Filter20.envmod, value);
Filter21.setAttribute(Filter21.envmod, value);
Filter22.setAttribute(Filter22.envmod, value);
Filter23.setAttribute(Filter23.envmod, value);
Filter24.setAttribute(Filter24.envmod, value);
Filter25.setAttribute(Filter25.envmod, value);
Filter26.setAttribute(Filter26.envmod, value);

Filter28.setAttribute(Filter28.envmod, value);
Filter19.setAttribute(Filter29.envmod, value);
Filter30.setAttribute(Filter30.envmod, value);
Filter31.setAttribute(Filter31.envmod, value);
Filter32.setAttribute(Filter32.envmod, value);
Filter33.setAttribute(Filter33.envmod, value);
Filter34.setAttribute(Filter34.envmod, value);
Filter35.setAttribute(Filter35.envmod, value);

Filter37.setAttribute(Filter37.envmod, value);
Filter38.setAttribute(Filter38.envmod, value);
Filter39.setAttribute(Filter39.envmod, value);
Filter40.setAttribute(Filter40.envmod, value);
Filter41.setAttribute(Filter41.envmod, value);
Filter42.setAttribute(Filter42.envmod, value);
Filter43.setAttribute(Filter43.envmod, value);
Filter44.setAttribute(Filter44.envmod, value);
Filter45.setAttribute(Filter45.envmod, value);
Filter46.setAttribute(Filter46.envmod, value);
Filter47.setAttribute(Filter47.envmod, value);
Filter48.setAttribute(Filter48.envmod, value);
Filter49.setAttribute(Filter49.envmod, value);
Filter50.setAttribute(Filter50.envmod, value);
Filter51.setAttribute(Filter51.envmod, value);
Filter52.setAttribute(Filter52.envmod, value);
Filter53.setAttribute(Filter53.envmod, value);
Filter54.setAttribute(Filter54.envmod, value);
};

Content.getComponent("FEnvMod").setControlCallback(onFEnvModControl);

const var FModA = Content.getComponent("FModA");

inline function onFModAControl(component, value)
{
Filter1.setAttribute(Filter1.cutmod, value);
Filter2.setAttribute(Filter2.cutmod, value);
Filter3.setAttribute(Filter3.cutmod, value);
Filter4.setAttribute(Filter4.cutmod, value);
Filter5.setAttribute(Filter5.cutmod, value);
Filter6.setAttribute(Filter6.cutmod, value);
Filter7.setAttribute(Filter7.cutmod, value);
Filter8.setAttribute(Filter8.cutmod, value);
Filter9.setAttribute(Filter9.cutmod, value);
Filter10.setAttribute(Filter10.cutmod, value);
Filter11.setAttribute(Filter11.cutmod, value);
Filter12.setAttribute(Filter12.cutmod, value);
Filter13.setAttribute(Filter13.cutmod, value);
Filter14.setAttribute(Filter14.cutmod, value);
Filter15.setAttribute(Filter15.cutmod, value);
Filter16.setAttribute(Filter16.cutmod, value);
Filter17.setAttribute(Filter17.cutmod, value);
Filter18.setAttribute(Filter18.cutmod, value);
Filter19.setAttribute(Filter19.cutmod, value);
Filter20.setAttribute(Filter20.cutmod, value);
Filter21.setAttribute(Filter21.cutmod, value);
Filter22.setAttribute(Filter22.cutmod, value);
Filter23.setAttribute(Filter23.cutmod, value);
Filter24.setAttribute(Filter24.cutmod, value);
Filter25.setAttribute(Filter25.cutmod, value);
Filter26.setAttribute(Filter26.cutmod, value);
Filter27.setAttribute(Filter27.cutmod, value);
Filter28.setAttribute(Filter28.cutmod, value);
Filter19.setAttribute(Filter29.cutmod, value);
Filter30.setAttribute(Filter30.cutmod, value);
Filter31.setAttribute(Filter31.cutmod, value);
Filter32.setAttribute(Filter32.cutmod, value);
Filter33.setAttribute(Filter33.cutmod, value);
Filter34.setAttribute(Filter34.cutmod, value);
Filter35.setAttribute(Filter35.cutmod, value);
Filter36.setAttribute(Filter36.cutmod, value);
Filter37.setAttribute(Filter37.cutmod, value);
Filter38.setAttribute(Filter38.cutmod, value);
Filter39.setAttribute(Filter39.cutmod, value);
Filter40.setAttribute(Filter40.cutmod, value);
Filter41.setAttribute(Filter41.cutmod, value);
Filter42.setAttribute(Filter42.cutmod, value);
Filter43.setAttribute(Filter43.cutmod, value);
Filter44.setAttribute(Filter44.cutmod, value);
Filter45.setAttribute(Filter45.cutmod, value);
Filter46.setAttribute(Filter46.cutmod, value);
Filter47.setAttribute(Filter47.cutmod, value);
Filter48.setAttribute(Filter48.cutmod, value);
Filter49.setAttribute(Filter49.cutmod, value);
Filter50.setAttribute(Filter50.cutmod, value);
Filter51.setAttribute(Filter51.cutmod, value);
Filter52.setAttribute(Filter52.cutmod, value);
Filter53.setAttribute(Filter53.cutmod, value);
Filter54.setAttribute(Filter54.cutmod, value);
};

Content.getComponent("FModA").setControlCallback(onFModAControl);

const var ComboBox1 = Content.getComponent("ComboBox1");


inline function onComboBox1Control(component, value)
{
Filter1.setAttribute(Filter1.cutdets, value);
Filter2.setAttribute(Filter2.cutdets, value);
Filter3.setAttribute(Filter3.cutdets, value);
Filter4.setAttribute(Filter4.cutdets, value);
Filter5.setAttribute(Filter5.cutdets, value);
Filter6.setAttribute(Filter6.cutdets, value);
Filter7.setAttribute(Filter7.cutdets, value);
Filter8.setAttribute(Filter8.cutdets, value);
Filter9.setAttribute(Filter9.cutdets, value);
Filter10.setAttribute(Filter10.cutdets, value);
Filter11.setAttribute(Filter11.cutdets, value);
Filter12.setAttribute(Filter12.cutdets, value);
Filter13.setAttribute(Filter13.cutdets, value);
Filter14.setAttribute(Filter14.cutdets, value);
Filter15.setAttribute(Filter15.cutdets, value);
Filter16.setAttribute(Filter16.cutdets, value);
Filter17.setAttribute(Filter17.cutdets, value);
Filter18.setAttribute(Filter18.cutdets, value);
Filter19.setAttribute(Filter19.cutdets, value);
Filter20.setAttribute(Filter20.cutdets, value);
Filter21.setAttribute(Filter21.cutdets, value);
Filter22.setAttribute(Filter22.cutdets, value);
Filter23.setAttribute(Filter23.cutdets, value);
Filter24.setAttribute(Filter24.cutdets, value);
Filter25.setAttribute(Filter25.cutdets, value);
Filter26.setAttribute(Filter26.cutdets, value);
Filter27.setAttribute(Filter27.cutdets, value);
Filter28.setAttribute(Filter28.cutdets, value);
Filter19.setAttribute(Filter29.cutdets, value);
Filter30.setAttribute(Filter30.cutdets, value);
Filter31.setAttribute(Filter31.cutdets, value);
Filter32.setAttribute(Filter32.cutdets, value);
Filter33.setAttribute(Filter33.cutdets, value);
Filter34.setAttribute(Filter34.cutdets, value);
Filter35.setAttribute(Filter35.cutdets, value);
Filter36.setAttribute(Filter36.cutdets, value);
Filter37.setAttribute(Filter37.cutdets, value);
Filter38.setAttribute(Filter38.cutdets, value);
Filter39.setAttribute(Filter39.cutdets, value);
Filter40.setAttribute(Filter40.cutdets, value);
Filter41.setAttribute(Filter41.cutdets, value);
Filter42.setAttribute(Filter42.cutdets, value);
Filter43.setAttribute(Filter43.cutdets, value);
Filter44.setAttribute(Filter44.cutdets, value);
Filter45.setAttribute(Filter45.cutdets, value);
Filter46.setAttribute(Filter46.cutdets, value);
Filter47.setAttribute(Filter47.cutdets, value);
Filter48.setAttribute(Filter48.cutdets, value);
Filter49.setAttribute(Filter49.cutdets, value);
Filter50.setAttribute(Filter50.cutdets, value);
Filter51.setAttribute(Filter51.cutdets, value);
Filter52.setAttribute(Filter52.cutdets, value);
Filter53.setAttribute(Filter53.cutdets, value);
Filter54.setAttribute(Filter54.cutdets, value);
};

Content.getComponent("ComboBox1").setControlCallback(onComboBox1Control);


const var FilterAttack = Content.getComponent("FilterAttack");


inline function onFilterAttackControl(component, value)
{
Filter1.setAttribute(Filter1.attack, value);
Filter2.setAttribute(Filter2.attack, value);
Filter3.setAttribute(Filter3.attack, value);
Filter4.setAttribute(Filter4.attack, value);
Filter5.setAttribute(Filter5.attack, value);
Filter6.setAttribute(Filter6.attack, value);
Filter7.setAttribute(Filter7.attack, value);
Filter8.setAttribute(Filter8.attack, value);
Filter9.setAttribute(Filter9.attack, value);
Filter10.setAttribute(Filter10.attack, value);
Filter11.setAttribute(Filter11.attack, value);
Filter12.setAttribute(Filter12.attack, value);
Filter13.setAttribute(Filter13.attack, value);
Filter14.setAttribute(Filter14.attack, value);
Filter15.setAttribute(Filter15.attack, value);
Filter16.setAttribute(Filter16.attack, value);
Filter17.setAttribute(Filter17.attack, value);
Filter18.setAttribute(Filter18.attack, value);
Filter19.setAttribute(Filter19.attack, value);
Filter20.setAttribute(Filter20.attack, value);
Filter21.setAttribute(Filter21.attack, value);
Filter22.setAttribute(Filter22.attack, value);
Filter23.setAttribute(Filter23.attack, value);
Filter24.setAttribute(Filter24.attack, value);
Filter25.setAttribute(Filter25.attack, value);
Filter26.setAttribute(Filter26.attack, value);
Filter27.setAttribute(Filter27.attack, value);
Filter28.setAttribute(Filter28.attack, value);
Filter19.setAttribute(Filter29.attack, value);
Filter30.setAttribute(Filter30.attack, value);
Filter31.setAttribute(Filter31.attack, value);
Filter32.setAttribute(Filter32.attack, value);
Filter33.setAttribute(Filter33.attack, value);
Filter34.setAttribute(Filter34.attack, value);
Filter35.setAttribute(Filter35.attack, value);
Filter36.setAttribute(Filter36.attack, value);
Filter37.setAttribute(Filter37.attack, value);
Filter38.setAttribute(Filter38.attack, value);
Filter39.setAttribute(Filter39.attack, value);
Filter40.setAttribute(Filter40.attack, value);
Filter41.setAttribute(Filter41.attack, value);
Filter42.setAttribute(Filter42.attack, value);
Filter43.setAttribute(Filter43.attack, value);
Filter44.setAttribute(Filter44.attack, value);
Filter45.setAttribute(Filter45.attack, value);
Filter46.setAttribute(Filter46.attack, value);
Filter47.setAttribute(Filter47.attack, value);
Filter48.setAttribute(Filter48.attack, value);
Filter49.setAttribute(Filter49.attack, value);
Filter50.setAttribute(Filter50.attack, value);
Filter51.setAttribute(Filter51.attack, value);
Filter52.setAttribute(Filter52.attack, value);
Filter53.setAttribute(Filter53.attack, value);
Filter54.setAttribute(Filter54.attack, value);
};

Content.getComponent("FilterAttack").setControlCallback(onFilterAttackControl);

const var FilterDecay = Content.getComponent("FilterDecay");


inline function onFilterDecayControl(component, value)
{
Filter1.setAttribute(Filter1.decay, value);
Filter2.setAttribute(Filter2.decay, value);
Filter3.setAttribute(Filter3.decay, value);
Filter4.setAttribute(Filter4.decay, value);
Filter5.setAttribute(Filter5.decay, value);
Filter6.setAttribute(Filter6.decay, value);
Filter7.setAttribute(Filter7.decay, value);
Filter8.setAttribute(Filter8.decay, value);
Filter9.setAttribute(Filter9.decay, value);
Filter10.setAttribute(Filter10.decay, value);
Filter11.setAttribute(Filter11.decay, value);
Filter12.setAttribute(Filter12.decay, value);
Filter13.setAttribute(Filter13.decay, value);
Filter14.setAttribute(Filter14.decay, value);
Filter15.setAttribute(Filter15.decay, value);
Filter16.setAttribute(Filter16.decay, value);
Filter17.setAttribute(Filter17.decay, value);
Filter18.setAttribute(Filter18.decay, value);
Filter19.setAttribute(Filter19.decay, value);
Filter20.setAttribute(Filter20.decay, value);
Filter21.setAttribute(Filter21.decay, value);
Filter22.setAttribute(Filter22.decay, value);
Filter23.setAttribute(Filter23.decay, value);
Filter24.setAttribute(Filter24.decay, value);
Filter25.setAttribute(Filter25.decay, value);
Filter26.setAttribute(Filter26.decay, value);
Filter27.setAttribute(Filter27.decay, value);
Filter28.setAttribute(Filter28.decay, value);
Filter19.setAttribute(Filter29.decay, value);
Filter30.setAttribute(Filter30.decay, value);
Filter31.setAttribute(Filter31.decay, value);
Filter32.setAttribute(Filter32.decay, value);
Filter33.setAttribute(Filter33.decay, value);
Filter34.setAttribute(Filter34.decay, value);
Filter35.setAttribute(Filter35.decay, value);
Filter36.setAttribute(Filter36.decay, value);
Filter37.setAttribute(Filter37.decay, value);
Filter38.setAttribute(Filter38.decay, value);
Filter39.setAttribute(Filter39.decay, value);
Filter40.setAttribute(Filter40.decay, value);
Filter41.setAttribute(Filter41.decay, value);
Filter42.setAttribute(Filter42.decay, value);
Filter43.setAttribute(Filter43.decay, value);
Filter44.setAttribute(Filter44.decay, value);
Filter45.setAttribute(Filter45.decay, value);
Filter46.setAttribute(Filter46.decay, value);
Filter47.setAttribute(Filter47.decay, value);
Filter48.setAttribute(Filter48.decay, value);
Filter49.setAttribute(Filter49.decay, value);
Filter50.setAttribute(Filter50.decay, value);
Filter51.setAttribute(Filter51.decay, value);
Filter52.setAttribute(Filter52.decay, value);
Filter53.setAttribute(Filter53.decay, value);
Filter54.setAttribute(Filter54.decay, value);
};

Content.getComponent("FilterDecay").setControlCallback(onFilterDecayControl);

const var FilterSustain = Content.getComponent("FilterSustain");

inline function onFilterSustainControl(component, value)
{
Filter1.setAttribute(Filter1.sustain, value);
Filter2.setAttribute(Filter2.sustain, value);
Filter3.setAttribute(Filter3.sustain, value);
Filter4.setAttribute(Filter4.sustain, value);
Filter5.setAttribute(Filter5.sustain, value);
Filter6.setAttribute(Filter6.sustain, value);
Filter7.setAttribute(Filter7.sustain, value);
Filter8.setAttribute(Filter8.sustain, value);
Filter9.setAttribute(Filter9.sustain, value);
Filter10.setAttribute(Filter10.sustain, value);
Filter11.setAttribute(Filter11.sustain, value);
Filter12.setAttribute(Filter12.sustain, value);
Filter13.setAttribute(Filter13.sustain, value);
Filter14.setAttribute(Filter14.sustain, value);
Filter15.setAttribute(Filter15.sustain, value);
Filter16.setAttribute(Filter16.sustain, value);
Filter17.setAttribute(Filter17.sustain, value);
Filter18.setAttribute(Filter18.sustain, value);
Filter19.setAttribute(Filter19.sustain, value);
Filter20.setAttribute(Filter20.sustain, value);
Filter21.setAttribute(Filter21.sustain, value);
Filter22.setAttribute(Filter22.sustain, value);
Filter23.setAttribute(Filter23.sustain, value);
Filter24.setAttribute(Filter24.sustain, value);
Filter25.setAttribute(Filter25.sustain, value);
Filter26.setAttribute(Filter26.sustain, value);
Filter27.setAttribute(Filter27.sustain, value);
Filter28.setAttribute(Filter28.sustain, value);
Filter19.setAttribute(Filter29.sustain, value);
Filter30.setAttribute(Filter30.sustain, value);
Filter31.setAttribute(Filter31.sustain, value);
Filter32.setAttribute(Filter32.sustain, value);
Filter33.setAttribute(Filter33.sustain, value);
Filter34.setAttribute(Filter34.sustain, value);
Filter35.setAttribute(Filter35.sustain, value);
Filter36.setAttribute(Filter36.sustain, value);
Filter37.setAttribute(Filter37.sustain, value);
Filter38.setAttribute(Filter38.sustain, value);
Filter39.setAttribute(Filter39.sustain, value);
Filter40.setAttribute(Filter40.sustain, value);
Filter41.setAttribute(Filter41.sustain, value);
Filter42.setAttribute(Filter42.sustain, value);
Filter43.setAttribute(Filter43.sustain, value);
Filter44.setAttribute(Filter44.sustain, value);
Filter45.setAttribute(Filter45.sustain, value);
Filter46.setAttribute(Filter46.sustain, value);
Filter47.setAttribute(Filter47.sustain, value);
Filter48.setAttribute(Filter48.sustain, value);
Filter49.setAttribute(Filter49.sustain, value);
Filter50.setAttribute(Filter50.sustain, value);
Filter51.setAttribute(Filter51.sustain, value);
Filter52.setAttribute(Filter52.sustain, value);
Filter53.setAttribute(Filter53.sustain, value);
Filter54.setAttribute(Filter54.sustain, value);
};

Content.getComponent("FilterSustain").setControlCallback(onFilterSustainControl);

const var FilterRelease = Content.getComponent("FilterRelease");


inline function onFilterReleaseControl(component, value)
{
Filter1.setAttribute(Filter1.release, value);
Filter2.setAttribute(Filter2.release, value);
Filter3.setAttribute(Filter3.release, value);
Filter4.setAttribute(Filter4.release, value);
Filter5.setAttribute(Filter5.release, value);
Filter6.setAttribute(Filter6.release, value);
Filter7.setAttribute(Filter7.release, value);
Filter8.setAttribute(Filter8.release, value);
Filter9.setAttribute(Filter9.release, value);
Filter10.setAttribute(Filter10.release, value);
Filter11.setAttribute(Filter11.release, value);
Filter12.setAttribute(Filter12.release, value);
Filter13.setAttribute(Filter13.release, value);
Filter14.setAttribute(Filter14.release, value);
Filter15.setAttribute(Filter15.release, value);
Filter16.setAttribute(Filter16.release, value);
Filter17.setAttribute(Filter17.release, value);
Filter18.setAttribute(Filter18.release, value);
Filter19.setAttribute(Filter19.release, value);
Filter20.setAttribute(Filter20.release, value);
Filter21.setAttribute(Filter21.release, value);
Filter22.setAttribute(Filter22.release, value);
Filter23.setAttribute(Filter23.release, value);
Filter24.setAttribute(Filter24.release, value);
Filter25.setAttribute(Filter25.release, value);
Filter26.setAttribute(Filter26.release, value);
Filter27.setAttribute(Filter27.release, value);
Filter28.setAttribute(Filter28.release, value);
Filter19.setAttribute(Filter29.release, value);
Filter30.setAttribute(Filter30.release, value);
Filter31.setAttribute(Filter31.release, value);
Filter32.setAttribute(Filter32.release, value);
Filter33.setAttribute(Filter33.release, value);
Filter34.setAttribute(Filter34.release, value);
Filter35.setAttribute(Filter35.release, value);
Filter36.setAttribute(Filter36.release, value);
Filter37.setAttribute(Filter37.release, value);
Filter38.setAttribute(Filter38.release, value);
Filter39.setAttribute(Filter39.release, value);
Filter40.setAttribute(Filter40.release, value);
Filter41.setAttribute(Filter41.release, value);
Filter42.setAttribute(Filter42.release, value);
Filter43.setAttribute(Filter43.release, value);
Filter44.setAttribute(Filter44.release, value);
Filter45.setAttribute(Filter45.release, value);
Filter46.setAttribute(Filter46.release, value);
Filter47.setAttribute(Filter47.release, value);
Filter48.setAttribute(Filter48.release, value);
Filter49.setAttribute(Filter49.release, value);
Filter50.setAttribute(Filter50.release, value);
Filter51.setAttribute(Filter51.release, value);
Filter52.setAttribute(Filter52.release, value);
Filter53.setAttribute(Filter53.release, value);
Filter54.setAttribute(Filter54.release, value);
};

Content.getComponent("FilterRelease").setControlCallback(onFilterReleaseControl);

const var FilterHold = Content.getComponent("FilterHold");


inline function onFilterHoldControl(component, value)
{
	Envelope1.setAttribute(4, value);
	Envelope2.setAttribute(4, value);
	Envelope3.setAttribute(4, value);
	Envelope4.setAttribute(4, value);
	Envelope5.setAttribute(4, value);
	Envelope6.setAttribute(4, value);
	Envelope7.setAttribute(4, value);
	Envelope8.setAttribute(4, value);
	Envelope10.setAttribute(4, value);
	Envelope11.setAttribute(4, value);
	Envelope12.setAttribute(4, value);
	Envelope13.setAttribute(4, value);
	Envelope14.setAttribute(4, value);
	Envelope15.setAttribute(4, value);
	Envelope16.setAttribute(4, value);
	Envelope17.setAttribute(4, value);
	Envelope19.setAttribute(4, value);
	Envelope20.setAttribute(4, value);
	Envelope21.setAttribute(4, value);
	Envelope22.setAttribute(4, value);
	Envelope23.setAttribute(4, value);
	Envelope24.setAttribute(4, value);
	Envelope25.setAttribute(4, value);
	Envelope26.setAttribute(4, value);
	Envelope28.setAttribute(4, value);
	Envelope29.setAttribute(4, value);
	Envelope30.setAttribute(4, value);
	Envelope31.setAttribute(4, value);
	Envelope32.setAttribute(4, value);
	Envelope33.setAttribute(4, value);
	Envelope34.setAttribute(4, value);
	Envelope35.setAttribute(4, value);
	Envelope37.setAttribute(4, value);
	Envelope38.setAttribute(4, value);
	Envelope39.setAttribute(4, value);
	Envelope40.setAttribute(4, value);
	Envelope41.setAttribute(4, value);
	Envelope42.setAttribute(4, value);
	Envelope43.setAttribute(4, value);
	Envelope44.setAttribute(4, value);
	Envelope46.setAttribute(4, value);
	Envelope47.setAttribute(4, value);
	Envelope48.setAttribute(4, value);
	Envelope49.setAttribute(4, value);
	Envelope50.setAttribute(4, value);
	Envelope51.setAttribute(4, value);
	Envelope52.setAttribute(4, value);
	Envelope53.setAttribute(4, value);
};

Content.getComponent("FilterHold").setControlCallback(onFilterHoldControl);
