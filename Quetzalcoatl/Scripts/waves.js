var AMwaves = ["AM::IntAM1", "AM::IntAM2", "AM::IntAM3", "AM::IntAM4", "AM::IntAM5", "AM::IntAM6", "AM::IntAM7", "AM::IntAM8", "AM::AMFM1", "AM::AMFM2", "AM::AMFM3", "AM::AMFM4", "AM::AMFM5", "AM::AMFM6", "AM::AMFM7",
"AM::AMFM8", "AM::FMAM1", "AM::FMAM2", "AM::FMAM3", "AM::FMAM4", "AM::FMAM5", "AM::FMAM6", "AM::FMAM7", "AM::FMAM8", "AM::AMb1", "AM::AMb2", "AM::AMb3", "AM::AMb4",
"AM::AMb5", "AM::AMb6", "AM::AMb7", "AM::AMb8", "filter::IntSwp1","filter::IntSwp2", "filter::IntSwp3", "filter::IntSwp4", "filter::IntSwp5", "filter::IntSwp6",
"filter::IntSwp7", "filter::IntSwp8", "filter::mild", "filter::mild2", "filter::mild3", "filter::mild4", "filter::mild5", "filter::mild6", "filter::mild7",
"filter::mild8", "filter::Notch1", "filter::Notch2", "filter::Notch3", "filter::Notch4", "filter::Notch5", "filter::Notch6", "filter::Notch7", "filter::Notch8",
"filter::SwHP1", "filter::SwHP2", "filter::SwHP3", "filter::SwHP4", "filter::SwHP5", "filter::SwHP6", "filter::SwHP7", "filter::SwHP8", "FilMod::FunT1",
"FilMod::FunT2", "FilMod::FunT3", "FilMod::FunT4", "FilMod::FunT5", "FilMod::FunT6", "FilMod::FunT7", "FilMod::FunT8", "FilMod::NzFFM1", "FilMod::NzFFM2",
"FilMod::NzFFM3", "FilMod::NzFFM4", "FilMod::NzFFM5", "FilMod::NzFFM6", "FilMod::NzFFM7", "FilMod::NzFFM8", "FM::TriA1", "FM::TriA2", "FM::TriA3", "FM::TriA4",
"FM::TriA5", "FM::TriA6", "FM::TriA7", "FM::TriA8", "FM::TriB1", "FM::TriB2", "FM::TriB3", "FM::TriB4", "FM::TriB5", "FM::TriB6", "FM::TriB7", "FM::TriB8",
"FM::TriC1", "FM::TriC2", "FM::TriC3", "FM::TriC4", "FM::TriC5", "FM::TriC6", "FM::TriC7", "FM::TriC8",  "FM::QdOpA1", "FM::QdOpA2", "FM::QdOpA3", "FM::QdOpA4",
"FM::QdOpA5", "FM::QdOpA6", "FM::QdOpA7", "FM::QdOpA8", "FM::QdOpB1", "FM::QdOpB2", "FM::QdOpB3", "FM::QdOpB4", "FM::QdOpB5", "FM::QdOpB6", "FM::QdOpB7", "FM::QdOpB8", "FM::Env1", "FM::Env2", "FM::Env3", "FM::Env4", "FM::Env5",
"FM::Env6", "FM::Env7", "FM::Env8", "FM::Sync1", "FM::Sync2", "FM::Sync3", "FM::Sync4", "FM::Sync5", "FM::Sync6", "FM::Sync7", "FM::Sync8", "FM::LIN1", "FM::LIN2",
"FM::LIN3", "FM::LIN4", "FM::LIN5", "FM::LIN6", "FM::LIN7", "FM::LIN8", "FM::NRB1", "FM::NRB2", "FM::NRB3", "FM::NRB4", "FM::NRB5", "FM::NRB6", "FM::NRB7", "FM::NRB8",
"FM::QNT1", "FM::QNT2", "FM::QNT3", "FM::QNT4", "FM::QNT5", "FM::QNT6", "FM::QNT7", "FM::QNT8", "FM::TZ1", "FM::TZ2", "FM::TZ3", "FM::TZ4", "FM::TZ5", "FM::TZ6",
"FM::TZ7", "FM::TZ8", "FM::TZb1", "FM::TZb2", "FM::TZb3", "FM::TZb4", "FM::TZb5", "FM::TZb6", "FM::TZb7", "FM::TZb8", "FM::pmA1", "FM::pmA2", "FM::pmA3", "FM::pmA4",
"FM::pmA5", "FM::pmA6", "FM::pmA7", "FM::pmA8", "FM::pmB1", "FM::pmB2", "FM::pmB3", "FM::pmB4", "FM::pmB5", "FM::pmB6", "FM::pmB7", "FM::pmB8", "JX::Big",
"JX::Brassy", "JX::Piano", "JX::Whine", "JX::Harsh", "JX::fade", "JX::Little", "JX::Damp", "JX::S&H", "JX::Simple", "JX::Slow", "JX::Tipsy", "JX::Wet",
"JX::Wobb","Misc::Vibro1", "Misc::Vibro2", "Misc::Vibro3", "noise::CBS1", "noise::CBS2", "noise::CBS3", "noise::CBS4", "noise::CBS5", "noise::CBS6", "noise::CBS7",
"noise::CBS8", "noise::CyOP1", "noise::CyOP2", "noise::CyOP3", "noise::CyOP4", "noise::CyOP5", "noise::CyOP6", "noise::CyOP7", "noise::CyOP8", "noise::FMAM1",
"noise::FMAM2", "noise::FMAM3", "noise::FMAM4", "noise::FMAM5", "noise::FMAM6", "noise::FMAM7", "noise::FMAM8", "noise::SrNz1", "noise::SrNz2", "noise::SrNz3",
"noise::SrNz4", "noise::SrNz5", "noise::SrNz6", "noise::SrNz7", "noise::SrNz8", "noise::xMod1", "noise::xMod2", "noise::xMod3", "noise::xMod4", "noise::xMod5",
"noise::xMod6", "noise::xMod7", "noise::xMod8", "noise::xModB1", "noise::xModB2", "noise::xModB3", "noise::xModB4", "noise::xModB5", "noise::xModB6", "noise::xModB7",
"noise::xModB8", "shape::FPWM1", "shape::FPWM2", "shape::FPWM3", "shape::FPWM4", "shape::FPWM5", "shape::FPWM6", "shape::FPWM7", "shape::FPWM8", "sys::pwm1",
"sys::pwm2", "sys::pwm3", "sys::pwm4", "sys::bell1", "sys::bell2", "sys::bell3", "sys::bell4"];