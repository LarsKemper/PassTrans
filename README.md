# PassTrans

An password transfer application built using the MERN stack

![App Screenshot](/.assets/screen1.png?raw=true)

<details>
  <summary>More screenshots</summary><details>
  <img src="/.assets/screen2.png?raw=true" name="screen2">
</details>

## Tech Stack

**Client:** React, TailwindCSS, PostCSS, TypeScript

**Server:** Node, Express, TypeScript

**App:** React Native, Expo, TailwindCSS

**Database:** MongoDB

## API Reference

#### Create Transfer

```http
  POST /api/v1/transfer
```

#### Get Transfer

```http
  GET /api/v1/transfer/:accessId
```

#### set Transfer viewed

```http
  PUT /api/v1/transfer/setViewed/:accessId
```

#### Requst access Dashboard code

```http
  POST /api/v1/dashboard/request/
```

#### Verify access to Dashboard with code

```http
  POST /api/v1/dashboard/request/verify
```

#### Get Transfer Dashboard information

```http
  GET /api/v1/dashboard/:accessId
```

#### Change Dashbaord status

```http
  PUT /api/v1/dashboard/status/:access
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env files (client/server)

| Variable name          | optional | description                                  | Directory |
| :--------------------- | :------- | :------------------------------------------- | :-------- |
| `REACT_APP_URL_SERVER` | false    | http://<domain/protocol>:<port>/api/:version | client    |
| `DB_URL`               | false    | Mongo Atlas url                              | server    |
| `PORT`                 | true     | Server port - default: 5000                  | server    |
| `API_BASE`             | false    | Api base url - /api/:version                 | server    |
| `HASH_KEY`             | false    | Password Hash key                            | server    |
| `MAIL_ISSENDING`       | true     | true = Mails are being sent - default: false | server    |
| `MAIL_HOST`            | false    | smtp host                                    | server    |
| `MAIL_PORT`            | false    | smtp port                                    | server    |
| `MAIL_USER`            | false    | mail user/email                              | server    |
| `MAIL_PASS`            | false    | mail password                                | server    |

## Run Locally

Clone the project

```bash
  git clone https://github.com/LarsKemper/PassTransV2.git
```

Go to the project directorys

```bash
  cd client
  and
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

##### Client will start on Port: 3000

##### Server will default start on Port : 5000

## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
