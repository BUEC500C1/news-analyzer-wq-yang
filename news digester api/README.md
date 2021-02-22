

# News Feed Ingester

## 1. User Stories

- API user should be able to subscribe to specific topics, e.g. technology, politics, etc.
- API users should be able to subscribe to specific news providers, e.g. npr, Boston Globe, etc.
- API users should be able to get stream of news that they subscribe to, so that they can get inspiration for their investigation/report.
- API users should be able to search keyword to enhance story.

## 2. Procedure-based or Entity-based

Procedure-based.

## 3. Operations, Data, and Status

### Operations

- subscribe(type='topic', name)
- getStream()
- searchKeyword(keyword)

### Data

news

```json
{
  'agent': AGENT,
  'entity': [KEY1, KEY2, ...,],  // name, location, other kind of keyword
}
```

