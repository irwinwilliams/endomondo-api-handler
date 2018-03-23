import { DateTime, Duration } from 'luxon';

class Point {

    // eslint-disable-next-line complexity
    constructor({
        time,
        instruction,
        latitude,
        longitude,
        distance,
        duration,
        speed,
        hr,
        cadence,
        altitude
    }) {
        this.time = time;
        this.latitude = latitude;
        this.longitude = longitude;
        this.instruction = instruction || null;
        this.distance = distance || null;
        this.duration = duration || null;
        this.speed = speed || null;
        this.hr = hr || null;
        this.cadence = cadence || null;
        this.altitude = typeof altitude !== 'undefined' && altitude !== null ? altitude : null;
    }

    getTime() {
        return this.time;
    }

    setTime(time) {
        this.time = time;
        return this;
    }

    getLatitude() {
        return this.latitude;
    }

    setLatitude(latitude) {
        this.latitude = latitude;
        return this;
    }

    getLongitude() {
        return this.longitude;
    }

    setLongitude(longitude) {
        this.longitude = longitude;
        return this;
    }

    getAltitude() {
        return this.altitude;
    }

    setAltitude(altitude) {
        this.altitude = altitude;
        return this;
    }

    getInstruction() {
        return this.instruction;
    }

    setInstruction(instruction) {
        this.instruction = instruction;
        return this;
    }

    getDistance() {
        return this.distance;
    }

    setDistance(distance) {
        this.distance = distance;
        return this;
    }

    getSpeed() {
        return this.speed;
    }

    setSpeed(speed) {
        this.speed = speed;
        return this;
    }

    getHeartRate() {
        return this.hr;
    }

    setHeartRate(hr) {
        this.hr = hr;
        return this;
    }

    getCadence() {
        return this.cadence;
    }

    setCadence(cadence) {
        this.cadence = cadence;
        return this;
    }

    toString() {
        return [this.getTime().toUTC().toFormat('yyyy-MM-dd HH:mm:ss \'UTC\''), this.getInstruction(), this.getLatitude(), this.getLongitude(), this.getDistance(), this.getSpeed(), this.getAltitude(), this.getHeartRate(), this.getCadence(), ''].map(item => {
            return item === null ? '' : item;
        }).join(';');
    }
}

const RUNNING = 0;
const CYCLING_TRANSPORT = 1;
const CYCLING_SPORT = 2;
const MOUNTAIN_BIKINGS = 3;
const SKATING = 4;
const ROLLER_SKIING = 5;
const SKIING_CROSS_COUNTRY = 6;
const SKIING_DOWNHILL = 7;
const SNOWBOARDING = 8;
const KAYAKING = 9;
const KITE_SURFING = 10;
const ROWING = 11;
const SAILING = 12;
const WINDSURFING = 13;
const FINTESS_WALKING = 14;
const GOLFING = 15;
const HIKING = 16;
const ORIENTEERING = 17;
const WALKING = 18;
const RIDING = 19;
const SWIMMING = 20;
const CYCLING_INDOOR = 21;
const OTHER = 22;
const AEROBICS = 23;
const BADMINTON = 24;
const BASEBALL = 25;
const BASKETBALL = 26;
const BOXING = 27;
const CLIMBING_STAIRS = 28;
const CRICKET = 29;
const ELLIPTICAL_TRAINING = 30;
const DANCING = 31;
const FENCING = 32;
const FOOTBALL_AMERICAN = 33;
const FOOTBALL_RUGBY = 34;
const FOOTBALL_SOCCER = 35;
const HANDBALL = 36;
const HOCKEY = 37;
const PILATES = 38;
const POLO = 39;
const SCUBA_DIVING = 40;
const SQUASH = 41;
const TABLE_TENIS = 42;
const TENNIS = 43;
const VOLEYBALL_BEACH = 44;
const VOLEYBALL_INDOOR = 45;
const WEIGHT_TRAINING = 46;
const YOGA = 47;
const MARTINAL_ARTS = 48;
const GYMNASTICS = 49;
const STEP_COUNTER = 50;
const CIRKUIT_TRAINING = 87;
const RUNNING_TREADMILL = 88;
const SKATEBOARDING = 89;
const SURFING = 90;
const SNOWSHOEING = 91;
const WHEELCHAIR = 92;
const CLIMBING = 93;
const WALKING_TREADMILL = 94;
const KICK_SCOOTER = 95;
const STAND_UP_PADDLING = 96;
const TRAIL_RUNNING = 97;
const ROWING_INDOORS = 98;
const FLOORBALL = 99;
const ICE_SKATING = 100;
const SKI_TOURING = 101;
const ROPE_JUMPING = 102;
const STRETCHING = 103;
const CANICROSS = 104;
const PADDLE_TENNIS = 105;
const PARAGLIDING = 106;

const names = {
    [RUNNING]: 'Running',
    [CYCLING_TRANSPORT]: 'Cycling, transport',
    [CYCLING_SPORT]: 'Cycling, sport',
    [MOUNTAIN_BIKINGS]: 'Mountain biking',
    [SKATING]: 'Skating',
    [ROLLER_SKIING]: 'Roller skiing',
    [SKIING_CROSS_COUNTRY]: 'Skiing, cross country',
    [SKIING_DOWNHILL]: 'Skiing, downhill',
    [SNOWBOARDING]: 'Snowboarding',
    [KAYAKING]: 'Kayaking',
    [KITE_SURFING]: 'Kite surfing',
    [ROWING]: 'Rowing',
    [SAILING]: 'Sailing',
    [WINDSURFING]: 'Windsurfing',
    [FINTESS_WALKING]: 'Fitness walking',
    [GOLFING]: 'Golfing',
    [HIKING]: 'Hiking',
    [ORIENTEERING]: 'Orienteering',
    [WALKING]: 'Walking',
    [RIDING]: 'Riding',
    [SWIMMING]: 'Swimming',
    [CYCLING_INDOOR]: 'Cycling, Indoor',
    [OTHER]: 'Other',
    [AEROBICS]: 'Aerobics',
    [BADMINTON]: 'Badminton',
    [BASEBALL]: 'Baseball',
    [BASKETBALL]: 'Basketball',
    [BOXING]: 'Boxing',
    [CLIMBING_STAIRS]: 'Climbing stairs',
    [CRICKET]: 'Cricket',
    [ELLIPTICAL_TRAINING]: 'Elliptical training',
    [DANCING]: 'Dancing',
    [FENCING]: 'Fencing',
    [FOOTBALL_AMERICAN]: 'Football, American',
    [FOOTBALL_RUGBY]: 'Football, rugby',
    [FOOTBALL_SOCCER]: 'Football, soccer',
    [HANDBALL]: 'Handball',
    [HOCKEY]: 'Hockey',
    [PILATES]: 'Pilates',
    [POLO]: 'Polo',
    [SCUBA_DIVING]: 'Scuba diving',
    [SQUASH]: 'Squash',
    [TABLE_TENIS]: 'Table tennis',
    [TENNIS]: 'Tennis',
    [VOLEYBALL_BEACH]: 'Volleyball, beach',
    [VOLEYBALL_INDOOR]: 'Volleyball, indoor',
    [WEIGHT_TRAINING]: 'Weight training',
    [YOGA]: 'Yoga',
    [MARTINAL_ARTS]: 'Martial arts',
    [GYMNASTICS]: 'Gymnastics',
    [STEP_COUNTER]: 'Step counter',
    [CIRKUIT_TRAINING]: 'Circuit Training',
    [SKATEBOARDING]: 'Skateboarding',
    [CLIMBING]: 'Climbing',
    [KICK_SCOOTER]: 'Kick scooter',
    [CANICROSS]: 'Canicross',
    [FLOORBALL]: 'Floorball',
    [ICE_SKATING]: 'Ice skating',
    [RUNNING_TREADMILL]: 'Running (Treadmill)',
    [SURFING]: 'Surfing',
    [SNOWSHOEING]: 'Showshoeing',
    [WHEELCHAIR]: 'Wheelchair',
    [WALKING_TREADMILL]: 'Walking (Treadmill)',
    [STAND_UP_PADDLING]: 'Stand up paddling',
    [TRAIL_RUNNING]: 'Trail running',
    [ROWING_INDOORS]: 'Rowing (indoors)',
    [SKI_TOURING]: 'Ski touring',
    [ROPE_JUMPING]: 'Rope jumping',
    [STRETCHING]: 'Stretching',
    [PADDLE_TENNIS]: 'Paddle tennis',
    [PARAGLIDING]: 'Paragliding'
};

class Workout {

    // eslint-disable-next-line complexity
    constructor({
        sportId,
        start,
        duration,
        distance,
        source,
        points,
        ascent,
        descent,
        calories,
        notes,
        mapPrivacy,
        workoutPrivacy,
        id,
        hashtags,
        heartRateAvg,
        heartRateMax,
        title
    }) {
        this.sportId = sportId;
        this.start = start;
        this.duration = duration;
        this.distance = distance;
        this.points = points || [];
        this.ascent = ascent || null;
        this.descent = descent || null;
        this.source = source || null;
        this.calories = calories || null;
        this.notes = notes || null;
        this.mapPrivacy = mapPrivacy || null;
        this.workoutPrivacy = workoutPrivacy || null;
        this.id = id || null;
        this.hashtags = hashtags || [];
        this.heartRateAvg = heartRateAvg || null;
        this.heartRateMax = heartRateMax || null;
        this.title = title || null;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
        return this;
    }

    getSportId() {
        return this.sportId;
    }

    setSportId(sportId) {
        this.sportId = sportId;
        return this;
    }

    getSportName() {
        return names[this.getSportId()];
    }

    getStart() {
        return this.start;
    }

    setStart(start) {
        this.start = start;
        return this;
    }

    getEnd() {
        const points = this.getPoints();

        if (points) {
            return points[points.length - 1].getTime();
        }

        return this.getStart().plus(this.getDuration());
    }

    getDuration() {
        return this.duration;
    }

    setDuration(duration) {
        this.duration = duration;
        return this;
    }

    getDistance() {
        return this.distance;
    }

    setDistance(distance) {
        this.distance = distance;
        return this;
    }

    getPoints() {
        return this.points;
    }

    hasGPSData() {
        return this.points.length > 0;
    }

    setPoints(points) {
        this.points = points;
        return this;
    }

    getAscent() {
        return this.ascent;
    }

    setAscent(ascent) {
        this.ascent = ascent;
        return this;
    }

    getDescent() {
        return this.descent;
    }

    setDescent(descent) {
        this.descent = descent;
        return this;
    }

    getCalories() {
        return this.calories;
    }

    setCalories(calories) {
        this.calories = calories;
        return this;
    }

    getNotes() {
        return this.notes;
    }

    setNotes(notes) {
        this.notes = notes;
        return this;
    }

    getMapPrivacy() {
        return this.mapPrivacy;
    }

    setMapPrivacy(privacy$$1) {
        this.mapPrivacy = privacy$$1;
        return this;
    }

    getWorkoutPrivacy() {
        return this.workoutPrivacy;
    }

    setWorkoutPrivacy(privacy$$1) {
        this.workoutPrivacy = privacy$$1;
        return this;
    }

    getHashtags() {
        return this.hashtags;
    }

    setHashtags(hashtags) {
        this.hashtags = hashtags;
        return this;
    }

    addHashtags(hashtags) {
        hashtags.forEach(hashtag => {
            this.addHashtag(hashtag);
        });

        return this;
    }

    addHashtag(hashtag) {
        if (!this.hasHashtag(hashtag)) {
            this.hashtags.push(hashtag);
        }

        return this;
    }

    hasHashtag(hashtag) {
        return this.hashtags.indexOf(hashtag) !== -1;
    }

    getAvgHeartRate() {
        return this.heartRateAvg;
    }

    setAvgHeartRate(hr) {
        this.heartRateAvg = hr;
        return this;
    }

    getMaxHeartRate() {
        return this.heartRateMax;
    }

    setMaxHeartRate(hr) {
        this.heartRateMax = hr;
        return this;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    getSource() {
        return this.source;
    }

    toString() {
        return [`Workout ${this.getId() || ''}`, `type: ${this.getSportName()}`, `start: ${this.getStart().toFormat('yyyy-MM-dd HH:mm')}`, `distance: ${Math.round(this.getDistance())}km`, `duration: ${Math.round(this.getDuration().as('minutes'))}min`].join('; ');
    }
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

class PointFactory {
    static getPointFromApi(point) {
        return new Point(_extends({
            time: DateTime.fromISO(point.time),
            instruction: point.instruction,
            latitude: point.latitude,
            longitude: point.longitude,
            distance: point.distance,
            altitude: point.altitude,
            duration: Duration.fromObject({
                seconds: point.duration
            })
        }, point.sensor_data ? {
            speed: point.sensor_data.speed,
            hr: point.sensor_data.heart_rate,
            cadence: point.sensor_data.cadence
        } : {}));
    }

    static get(time, latitude, longitude, {
        instruction,
        distance,
        duration,
        speed,
        altitude,
        cadence,
        hr
    }) {
        return new Point({
            time,
            latitude,
            longitude,
            altitude,
            hr,
            instruction,
            distance,
            duration,
            speed,
            cadence
        });
    }
}

class WorkoutFactory {
    static getWorkoutFromApi(workout) {
        const { points } = workout;

        return new Workout({
            sportId: workout.sport,
            start: DateTime.fromISO(workout.local_start_time),
            duration: Duration.fromObject({
                seconds: workout.duration
            }),
            distance: workout.distance,
            source: workout,
            points: points.points ? points.points.map(point => {
                return PointFactory.getPointFromApi(point);
            }) : [],
            ascent: workout.ascent,
            descent: workout.descent,
            calories: workout.calories,
            notes: workout.message,
            mapPrivacy: workout.show_map,
            workoutPrivacy: workout.show_workout,
            id: workout.id,
            hashtags: workout.hashtags,
            heartRateAvg: workout.heart_rate_avg,
            heartRateMax: workout.heart_rate_max,
            title: workout.title
        });
    }
}

export default WorkoutFactory;
