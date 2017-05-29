/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Type',
                            type: 'text',
                            rect: ['-34px', '60px', '412px', '83px', 'auto', 'auto'],
                            opacity: '0',
                            text: "TYPOGRAPHY ",
                            align: "center",
                            font: ['open-sans, sans-serif', [32, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["1px", "", "", ""]
                        },
                        {
                            id: 'Tech',
                            type: 'text',
                            rect: ['17px', '113px', '310px', '78px', 'auto', 'auto'],
                            opacity: '0',
                            text: "TECHNOLOGY",
                            align: "center",
                            font: ['open-sans, sans-serif', [32, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["0.5px", "", "", ""]
                        },
                        {
                            id: 'black',
                            type: 'rect',
                            rect: ['57px', '172px', '231px', '61px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'time',
                            type: 'text',
                            rect: ['69px', '179px', '208px', '61px', 'auto', 'auto'],
                            opacity: '0',
                            text: "TIMELINE",
                            align: "center",
                            font: ['open-sans, sans-serif', [32, "px"], "rgba(255,255,255,1.00)", "600", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["2px", "", "", ""]
                        },
                        {
                            id: 'orange',
                            type: 'rect',
                            rect: ['32px', '31px', '257px', '218px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(216,125,10,0.00)"],
                            stroke: [12,"rgba(239,146,0,1.00)","solid"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '345px', '305px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${Type}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid13",
                            "opacity",
                            1500,
                            1500,
                            "linear",
                            "${Type}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid51",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${time}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid49",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${Tech}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid11",
                            "opacity",
                            0,
                            3000,
                            "linear",
                            "${black}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid23",
                            "opacity",
                            3000,
                            1000,
                            "linear",
                            "${black}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid53",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${black}",
                            '57px',
                            '57px'
                        ],
                        [
                            "eid59",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${black}",
                            '172px',
                            '172px'
                        ],
                        [
                            "eid60",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${time}",
                            '179px',
                            '179px'
                        ],
                        [
                            "eid12",
                            "opacity",
                            0,
                            4000,
                            "linear",
                            "${time}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid24",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${time}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid55",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Tech}",
                            '113px',
                            '113px'
                        ],
                        [
                            "eid9",
                            "opacity",
                            0,
                            2250,
                            "linear",
                            "${Tech}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid17",
                            "opacity",
                            2250,
                            1750,
                            "linear",
                            "${Tech}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${orange}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("ttt_intro_edgeActions.js");
})("EDGE-720375755");
