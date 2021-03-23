# Text NLP Analysis
Use 

## 1. User Stories

- API users should be able to input and submit text/document.
- API users should be able to assign the language of text.
- API users should be able to get sentiment of the text.
- API users should be able to get entities of the text

## 2. Procedure-based or Entity-based

Procedure-based.

## 3. Operations, Data, and Status

### Data

Entity:

```json
{
  name: NAME
  address: ADDRESS
  location: LOCATION
  institute: INSTITUTE
}
```



Sentiment:

```json
{
  'entity': ENTITY,
  'attitude': 0
}
```



### Operation

details are in nlp_api.js

- textInit(data, type='text', lang="en")
- analyzeSentiment()
- analyzeEntity()