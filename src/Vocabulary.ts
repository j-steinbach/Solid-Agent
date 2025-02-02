import {createVocabulary} from "@solid/community-server"

export const AS = createVocabulary('https://www.w3.org/ns/activitystreams#',
    'Announce',
    'actor',
    'target',
    'object',
    'to'
)
export const SOSA = createVocabulary('http://www.w3.org/ns/sosa/',
    'Platform',
    'Actuator',
    'FeatureOfInterest',
    'ActuatableProperty',
    'Actuation',
    'Result',
    'isHostedBy',
    'madeByActuator',
    'madeObservation',
    'hasFeatureOfInterest',
    'actsOnProperty',
    'resultTime',
    'hasResult'
)

export const SAREF = createVocabulary('https://saref.etsi.org/core/',
    'hasState',
    'OnState',
    'OffState'
)

export const DBR = createVocabulary('http://dbpedia.org/resource/',
    'Hue',
    'Brightness',
    'Colorfulness'
)
