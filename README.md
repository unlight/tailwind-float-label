# tailwind-float-label

Tailwind plugin to add floating label, control with float label components

## Setup

1.

```sh
npm install --save-dev tailwind-float-label
```

2.  Add plugin to `plugins` section of `tailwind.config.js`

```js
plugins: [require('tailwind-float-label')(options)],
```

## Usage

Plugins adds three components supposed used together:

-   `.has-float-label` Container which holds input control and label
-   `.control-with-float-label` Form control
-   `.is-float-label` Label

```html
<form class="max-w-xs mx-auto p-5 space-y-4">
    <h2 class="text-2xl font-bold text-center">Login</h2>
    <div class="has-float-label">
        <input
            type="text"
            id="name"
            autocomplete="off"
            placeholder="Name"
            class="control-with-float-label outline-none focus:shadow-outline border w-full px-1"
        />
        <label for="name" class="is-float-label bg-white text-gray-700">Name</label>
    </div>
    <div class="has-float-label">
        <label class="is-float-label bg-white text-gray-700">About</label>
        <textarea
            class="control-with-float-label outline-none focus:shadow-outline border w-full px-1"
            placeholder="About"
        >
        </textarea>
    </div>
</form>
```

Rules for usage:

1. `.control-with-float-label` and `.is-float-label`
   must be direct children of `.has-float-label`
2. If label used before form control it becomes sticky (always visible)
3. If label used after form control label is visible when controls contains value
   (classic float label pattern)

## Options

```ts
type Options = {
    /**
     * Custom styles for container.
     */
    container?: DeepPartial<{ [k: string]: string } | string>;
    /**
     * Custom styles for input control.
     */
    control?: DeepPartial<{ [k: string]: string } | string>;
    /**
     * Custom styles for label.
     */
    label?: DeepPartial<{ [k: string]: string } | string>;
};
```
