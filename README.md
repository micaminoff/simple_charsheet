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
|28.7.2020|Researching and finding icons|2h|
|--|Getting icons to work properly|3h|
|--|Basic structure and styling improvements|1h5m|
|--|Add some missing data|10m|
|29.7.2020|Replace optional attributes with defaults|20m|
|--|Add more missing data|25m|
|--|Config problems|20m|
|--|Modal|15m|
|--|Attribution|5m|
|30.7.2020|Planning callback, state, and source of truth|20m|
|--|Implementing reusable inputs and state management in edit modal|45m|
|31.7.2020|Working on lifting state up, targeting nested attributes and writing reusable callbacks|5h|
|--|Updating "actual" aka top-level state (multiple levels of state and callbacks are fun)|2h|
|--|Better user feedback|10m|
|1.8.2020|More verbose attributes|20m|
|--|Further implementing the edit modal|2h30m|
|Total|--|37h20m|