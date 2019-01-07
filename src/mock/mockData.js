const mock1 = {
    "id": "1",
    "type": "text",
    "options": {
        "text": "Die sist ein kleiner Text."
    }
}

const mock2 = {
    "id": 1,
    "type": "unit",
    "units": [
        {
            "id": "10",
            "type": "text",
            "options": {
                "text": "Die sist ein kleiner Text."
            }
        },
        {
            "id": "20",
            "type": "Unit",
            "units": [
                {
                    "id": "30",
                    "type": "unit",
                    "units": [
                        {
                            "id": "40",
                            "type": "text",
                            "options": {
                                "titel": "Neuronale Netze sind irgendwie total krass."
                            }
                        }
                    ]
                },
                {
                    "id": "50",
                    "type": "text",
                    "options": {
                        "text": "Die sist ein kleiner Text."
                    }
                },
                {
                    "id": "99",
                    "type": "text",
                    "options": {
                        "titel": "Lustiges Video",
                        "description": "Ein cooles lustiges Video mit einem Hasen.",
                        "path": "https://www.w3schools.com/html/mov_bbb.mp4",
                        "resolution": "320x240",
                        "runtime": "10.26s",
                        "size": "131.509.108",
                        "author": "Mario Linz",
                        "intelligentSearchDepth": 5
                    }
                }
            ]
        }
    ]
}

export default {
    mock1,
    mock2
};