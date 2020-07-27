## Simple charsheet
This is my project for the project part of University of Helsinki's ["Full Stack Open"](https://fullstackopen.com/en)

## Running locally
1. clone the repo `git clone https://github.com/micaminoff/simple_charsheet.git`
2. install frontend and backend projects `npm install`
3. start backend `npm run dev`
4. start frontend `npm start`

## Intent
The plan is to build a slightly over-engineered, but easy to use Character sheet for DnD. Development goals include:
* Fully realized character sheet (only user-supplied info, no shady business)
* Saving as guest using localstorage
* Registration and saving to db
* Diceroller
* Character generation
* (SRD integration)

The primary focus of development will be to learn various technologies in use in modern full stack development. These include:
* Typescript
* React with hooks
* Sass
* Node & Express
* GraphQL || Postgresql || MongoDB
* AWS || other hosting

### Worklog
|Date|What|Time|
|---|---|---|
|6.7.2020|Setup|3h|
|7.7.2020|Setup, validation, documentation|5h|
|8.7.2020|Troubleshooting JSON errors|1h|
|--|Drafting schema|1h|
|--|Designing & testing out layouts|2h|
|--|Component structure|30m|
|9.7.2020|Typing for Character class|30m|
|--|Instance creation from JSON|1h30m|
|24.7.2020|Better typing structure|1h30m|
|--|Rename variables and components|20m|
|27.7|Props propagation & styling|1h10m|
|--|HP and Character info sections|1h5m|
|Total|--|18h35m|