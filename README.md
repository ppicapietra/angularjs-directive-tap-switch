
# tap-switch

## Key Features

* customizable style (i.e.: color, size)

### Getting Started

Add the tap-switch dependency:

```bash
npm install @thenablyn/angularjs-tap-switch --save
```

Then add the tab-switch module to your Angular App file, e.g.

```js
var app = angular.module('app', ["tap-switch"]);
```

### Using local data

```html
<tap-switch   ng-model="modelName"
              id="myTapSwitchId"
              name="myTapSwitchName"
              title="custom property switch"
              active-color="green"
              inactive-color="#CC333F"
              on-change="myTapSwitchFunction()"
              />
```
