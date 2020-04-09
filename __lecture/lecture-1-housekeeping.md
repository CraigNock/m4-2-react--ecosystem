# 4.2.1 React Ecosystem

---

### 🏠Housekeeping: Keys

```
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`.
in SomeComponent (at src/index.js:24)
in App (at src/index.js:31)
```

---

### 🏠Housekeeping: Modules

In the last lecture, we saw **default exports**

```js
function Button(props) {
  ✂️
}

export default Button;
```

```js
import Button from '../Button';
```

---

There are also **named exports**

```js
// authentication-utils.js
export const signUp = () => { ✂️ };
export const logIn = () => { ✂️ };
export const logOut = () => { ✂️ };
```

```js
import { logIn, logOut } from '../../authentication-utils.js';
```

---

### A module can have:

- 0 or 1 _default_ exports,
- any number of _named_ exports, and
- both types of exports.

---

# Exercise

Are the following code snippets correct or incorrect?

Fix them, if incorrect

---

```js
// src/data.js
const data = { hi: 5 };

export default data;

```

```js
// src/index.js
import theBestData from './data';
//fine
```

---

```js
// src/data.js
export const MAGIC_NUMBER = 123;

```

```js
// src/index.js
import MAGIC_NUMBER from './data';
////not default, so needs {MAGIC_NUMBER}
```

---

```js
// src/data.js
export const users = [];
export const sessions = [];

const data = { users, sessions };

export default data;
//1 way too much exporting
const users = [];
const sessions = [];

const data = { users, sessions };

export default data;
//2 or (match below)
export const users = [];
export const sessions = [];
```

```js
// src/index.js
import {data, users} from './data';
//1 just: 
import data from './data';
//2 or (match above)
import {users} from './data';
```

---

```js
// src/data.js
export default const baseball = '⚾️';
//can't define as you export
const baseball = '⚾️';
export default baseball;
//or technically
export default '⚾️' ///but don't do this

```

```js
// src/index.js
import baseball from './data';
```

---
