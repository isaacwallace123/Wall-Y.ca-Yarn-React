import { createTheme } from "@mui/material"

const PermanentTheme = {
    NavBackgroundColor: 'linear-gradient(180deg, rgba(14,16,17,1) 35%, rgba(12,13,14,1) 100%)', //#0e1011
    NavTextColor: '#FFFFFF',

    SubNavBackground: 'linear-gradient(180deg, rgba(20,22,24,1) 35%, rgba(17,19,20,1) 100%)', //#141618
    SubNavSize: 40,

    NavButtonHover: '#0e1011',
}

const DarkThemes = {
    Primary: '#0e1011',

    NavBackgroundColor: PermanentTheme.NavBackgroundColor,
    SubNavBackground: PermanentTheme.SubNavBackground,
    NavTextColor: PermanentTheme.NavTextColor,
    NavButtonHover: PermanentTheme.NavButtonHover,

    MainBackgroundColor: '#1a1c1d',
    MainTextColor: '#FFFFFF',
    
    DisabledButtonColor: '#212529',
    DisabledBackground: '#121317',
}

const LightThemes = {
    Primary: '#FFFFFF',

    NavBackgroundColor: PermanentTheme.NavBackgroundColor,
    SubNavBackground: PermanentTheme.SubNavBackground,
    NavTextColor: PermanentTheme.NavTextColor,
    NavButtonHover: PermanentTheme.NavButtonHover,

    MainBackgroundColor: '#FFFFFF',
    MainTextColor: '#212529',
    
    DisabledButtonColor: '#212529',
    DisabledBackground: '#121317',
}

export const Dark = createTheme({
    palette: {
        action: {
            disabledBackground: DarkThemes.DisabledBackground,
            disabled: DarkThemes.DisabledButtonColor,
        },

        background: {
            default: DarkThemes.MainBackgroundColor
        },

        text: {
            primary: DarkThemes.MainTextColor
        },
    },

    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    background: DarkThemes.NavBackgroundColor
                },
                dense: {
                    height: PermanentTheme.SubNavSize,
                    minHeight: PermanentTheme.SubNavSize,
                    background: DarkThemes.SubNavBackground,
                    color: DarkThemes.NavTextColor,
                }
            }
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    background: DarkThemes.Primary
                }
            }
        },

        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: DarkThemes.NavBackgroundColor,
                    color: DarkThemes.MainTextColor
                }
            }
        },

        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: DarkThemes.MainTextColor
                }
            }
        },

        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: DarkThemes.MainTextColor,
                    textAlign: 'center'
                }
            }
        },

        MuiDivider: {
            styleOverrides: {
                root: {
                    background: DarkThemes.MainTextColor
                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        'background-color': DarkThemes.NavButtonHover
                    }
                },
            },
        }
    }
});

export const Light = createTheme({
    palette: {
        action: {
            disabledBackground: LightThemes.DisabledBackground,
            disabled: LightThemes.DisabledButtonColor,
        },

        background: {
            default: LightThemes.MainBackgroundColor,
        },

        text: {
            primary: LightThemes.MainTextColor,
        },
    },

    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    background: LightThemes.NavBackgroundColor
                },
                dense: {
                    height: PermanentTheme.SubNavSize,
                    minHeight: PermanentTheme.SubNavSize,
                    background: LightThemes.SubNavBackground,
                    color: LightThemes.NavTextColor,
                }
            }
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    background: LightThemes.Primary
                }
            }
        },

        MuiStepConnector: {
            styleOverrides: {
                root: {
                    background: LightThemes.MainTextColor,
                }
            }
        },

        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: LightThemes.MainBackgroundColor,
                }
            }
        },

        MuiDivider: {
            styleOverrides: {
                root: {
                    background: LightThemes.MainTextColor,
                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        'background-color': LightThemes.NavButtonHover
                    }
                },
            },
        }
    },
});