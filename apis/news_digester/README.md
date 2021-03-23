# News Feed Ingester
use NYT news API

## 1. User Stories

- API users should be able to search keyword to enhance story.
- API users should be able to analyze entites of the news.

## 2. Procedure-based or Entity-based

Procedure-based.

## 3. Operations, Data, and Status

### Operations
- search: GET '/news:keyword'
  - entity analyze: automatically call nlp api, analyze entity of article abstract
  - store to database for "local" search automatically

### Data

news

```javascript
{
  title: ,
  entity: [KEY1, KEY2, ...,],  // name, location, other kind of keyword
}
```

