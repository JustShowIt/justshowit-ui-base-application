const faker = require('faker');

const componentTypes = ['text','unit']
const maxCount = faker.random.number({ 'min': 5, 'max': 10 });
const maxLevel = faker.random.number({ 'min': 2, 'max': 3 });

const randomUnit = (count, level) => {
    const units = []

    if (level > 1) {
        for (let i=0; i < count; i++) {
            units.push({
                "id": faker.random.uuid(),
                "type": componentTypes[faker.random.number({ 'min': 0, 'max': componentTypes.length-1 })],
                "options": {
                    "text": faker.lorem.sentences()
                },
                "units": randomUnit(count, (level-1))
            })
        }
    }

    return units
}

const mock1 = {
    "id": "1",
    "type": "unit",
    "units": randomUnit(maxCount, maxLevel)
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