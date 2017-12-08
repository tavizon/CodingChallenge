# Kink.com Coding Challenge - Word API

## Developer Setup

### System Prerequisites

- Node.js
- pm2

### Get the code
```bash
git clone https://github.com:tavizon/CodingChallenge.git
```

### Install Dependancies

```bash
cd CodingChallenge/word-api
npm install
```

### Configure the Service

```bash
cp ./config/properties.json.template ./config/properties.json
```

No additional configuration is needed for local development.

### Run the Service

From the `word-api` directory, run:

```bash
pm2 start app.js
```

Logs:

```bash
pm2 logs
```

Stop the service:

```bash
pm2 stop app.js
````

Navigate to [http://localhost:5959/ping](http://localhost:5959/ping) to verify that the service is running.

### API Documentation

#### URL

/api/words?url=\<URL\>

#### Method

`GET`

#### URL Parameters

`url=[string]`

#### Success Response:
Code: 200 <br />
Content: `{words: <count>}`

#### Error Response
Code: 404 <br />
Content: `{"error":"Page not found"}`

OR

Code: 500 <br />
Content: `{"error":"URL was invalid or not supplied"}`
