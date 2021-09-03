# tailwind-float-label

Tailwind plugin to add floating label, control with float label components

Demo - https://unlight.github.io/tailwind-float-label

## Setup

```sh
npm install --save-dev tailwind-float-label
```

Add plugin to `plugins` section of `tailwind.config.js`

```js
plugins: [require('tailwind-float-label')(options)],
```

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

## Usage

Plugins adds these components supposed used together:

-   `.has-float-label` Container which holds input control and label
-   `.control-with-float-label` Form control
-   `.is-float-label` Label
-   `.is-float-label-sticky` Label which is always visible
-   But `.auto-float-label` Automatically make `label` floating and `input` inside this container

```html
<form class="max-w-xs mx-auto p-5 space-y-4">
    <h2 class="text-2xl font-bold text-center">Example</h2>
    <div class="has-float-label">
        <input
            type="text"
            id="name"
            autocomplete="off"
            placeholder="Name"
            class="control-with-float-label outline-none focus:shadow-outline border w-full px-1"
        />
        <label for="name" class="is-float-label bg-white text-gray-500">Name</label>
    </div>
    <!-- Auto: make `label` floating for `input` -->
    <div class="auto-float-label">
        <input
            type="text"
            id="auto"
            autocomplete="off"
            placeholder="Auto"
            class="outline-none focus:shadow-outline border w-full px-1"
        />
        <label for="auto" class="bg-white text-gray-500">Auto</label>
    </div>
</form>
```

#### Notes:

`.control-with-float-label` and `.is-float-label` must be direct children of `.has-float-label`

## Similar Projects

-   https://github.com/notiz-dev/floating-form-field-tailwindcss

## Resources

-   https://tailwindow.github.io/component-tailwindcss/components/form/input-text/index.html
-   https://github.com/you-dont-need/You-Dont-Need-JavaScript#Floating
-   https://csslayout.io/patterns/floating-label/
