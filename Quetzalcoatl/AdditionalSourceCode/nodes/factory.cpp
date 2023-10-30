/** Autogenerated Main.cpp. */

// ================================| Include only the DSP files  |================================

#include <hi_dsp_library/hi_dsp_library.h>
#include <hi_faust/hi_faust.h>
#include "includes.h"
// ==========================| Now we can add the rest of the codebase |==========================

#include <JuceHeader.h>

// ======================================| Project Factory |======================================

namespace project
{

struct Factory: public scriptnode::dll::StaticLibraryHostFactory
{
	Factory()
	{
		TempoSyncer::initTempoData();
		// Node registrations -------------------------------------------------------------------
		
		registerPolyNode<project::custom_node<1>, project::custom_node<NUM_POLYPHONIC_VOICES>>();
		registerPolyNode<project::MidiVel<1>, project::MidiVel<NUM_POLYPHONIC_VOICES>>();
		registerPolyNode<project::MidiTrack<1>, project::MidiTrack<NUM_POLYPHONIC_VOICES>>();
		registerPolyNode<project::HarmFade<1>, project::HarmFade<NUM_POLYPHONIC_VOICES>>();
		registerPolyNode<project::XFHarm<1>, project::XFHarm<NUM_POLYPHONIC_VOICES>>();
		registerDataNode<project::_networkdata>();
		registerDataNode<project::dftest_networkdata>();
		registerDataNode<project::polymod2_networkdata>();
		registerDataNode<project::modroutePitch_networkdata>();
		registerDataNode<project::DspNetwork_networkdata>();
		registerDataNode<project::_networkdata>();
		registerDataNode<project::polymod_networkdata>();
		registerDataNode<project::MutiChorus_networkdata>();
		registerDataNode<project::polymod4_networkdata>();
		registerDataNode<project::Midis_networkdata>();
		registerDataNode<project::scales_networkdata>();
		registerDataNode<project::shapet_networkdata>();
		registerDataNode<project::polymod3_networkdata>();
		registerDataNode<project::Arranged_networkdata>();
		registerDataNode<project::modroute_networkdata>();
		registerDataNode<project::pmod_networkdata>();
	}
};
}

scriptnode::dll::FactoryBase* scriptnode::DspNetwork::createStaticFactory()
{
	return new project::Factory();
}

