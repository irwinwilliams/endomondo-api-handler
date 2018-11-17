# Endomondo API handler

[![npm version](https://badge.fury.io/js/endomondo-api-handler.svg)](https://badge.fury.io/js/endomondo-api-handler)
[![renovate-app](https://img.shields.io/badge/renovate-app-blue.svg)](https://renovateapp.com/) 
[![Known Vulnerabilities](https://snyk.io/test/github/fabulator/endomondo-api-handler/badge.svg)](https://snyk.io/test/github/fabulator/endomondo-api-handler)
[![codecov](https://codecov.io/gh/fabulator/endomondo-api-handler/branch/master/graph/badge.svg)](https://codecov.io/gh/fabulator/endomondo-api-handler) 
[![travis](https://travis-ci.org/fabulator/endomondo-api-handler.svg?branch=master)](https://travis-ci.org/fabulator/endomondo-api-handler)


This a handler for unofficial Endomondo API, which is used on their web app and mobile app. It allows you to read various of information and update them. This library is focused on searching, updating and creating workouts. Other endpoints you can find by sniffing your browser. Cooperation is welcome. 

The library is based on [my PHP library](https://github.com/fabulator/endomondo-api) that do the similar.

The library is compiled for node 9.6. You are using this library on your own danger.

## How it works
I use a library for handling REST API request - [rest-api-handler](https://github.com/fabulator/rest-api-handler). It is based on browser fetch feature so it needs polyfill.

Since this is not official API you need to use your login and password to log in.

## How to use

Install npm library:

```
npm install endomondo-api-handler --save
```

Include fetch polyfill. I recommend cross-fetch:

```javascript
import 'cross-fetch/polyfill';
```

There are two APIs. One is based on the web app and the second on the mobile app. You need Mobile API to create new workouts. Regular API will do everything else.

### Authentize

If you need to create new workouts you need to authentize both to API and Mobile API.

```javascript
const { Api, MobileApi } = require('endomondo-api-handler');

(async () => {
    const api = new Api();
    const mobileApi = new MobileApi();

    await Promise.all([
        api.login(login, password),
        mobileApi.login(login, password),
    ]);

    console.log(await api.get('rest/session'));
})();
```

### Getting workout/s
To get single workout use getWorkout method:

```javascript
const workout = await api.getWorkout(775131509);
```

Search for workouts:

```javascript
const { DateTime } = require('luxon');

const { workouts } = await api.getWorkouts({
    afterDate: DateTime.fromObject({
        year: 2018,
        month: 3,
        day: 1,
    }),
    limit: 2,
});
console.log(workouts);
```

### Create a new workout

To create workout, use WorkoutFactory and MobileApi:

```javascript
const { DateTime, Duration } = require('luxon');
const math = require('mathjs');
const { Point, Workout, SPORTS } = require('endomondo-api-handler');

const start = DateTime.fromObject({
    year: 2018,
    month: 3,
    day: 27,
    hour: 5,
    minute: 2,
});

const workout = Workout.get(
    SPORTS.RUNNING,
    start,
    Duration.fromObject({ minutes: 3 }),
    math.unit(3, 'km'),
    [
        Point.get(start, 50.02957153, 14.51805568),
        Point.get(start.plus({ minutes: 1 }), 50.03057153, 14.52205568),
        Point.get(start.plus({ minutes: 2 }), 50.03357153, 14.53805568),
    ],
);

const workoutId = await mobileApi.createWorkout(workout);
```

### Export your workouts to GPX

```javascript
require('cross-fetch/polyfill');
const fs = require('fs');
const { Api } = require('endomondo-api-handler');

const api = new Api();

(async () => {
    await api.login(LOGIN, PASSWORD);

    await api.processWorkouts({}, (workout) => {
        console.log(workout.toString());
        if (workout.hasGPSData()) {
            fs.writeFileSync(`tmp/${workout.getId()}.gpx`, workout.toGpx(), 'utf8');
        }
    });
})();

```
