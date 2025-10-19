# tailwind-float-label

Tailwind plugin to add floating label, control with float label components

Demo - https://unlight.github.io/tailwind-float-label

## Setup and configuration

1. `npm install --save-dev tailwind-float-label`
2. Add `@import 'tailwind-float-label'` to your main css file
3. Plugin provides classes which must be set for label and input to make label floats.
   - `.float-container` Container which holds input control and label
   - `.float-input` Form input control
   - `.float-always` Use with `.float-container` to make label always visible (sticky)

```html
<form class="max-w-xs mx-auto p-5 space-y-4">
  <h2 class="text-2xl font-bold text-center">Example</h2>
  <div class="float-container">
    <label for="name" class="float-label px-2 bg-white text-gray-500"
      >Name</label
    >
    <input
      type="text"
      id="name"
      autocomplete="off"
      placeholder="Name"
      class="float-input outline-none focus:shadow-outline border w-full px-1"
    />
  </div>
</form>
```

If you need animation, add to `.float-label` following classes: `transition-all duration-200`

## Similar Projects

- https://github.com/notiz-dev/floating-form-field-tailwindcss

## Resources

- https://tailwindow.github.io/component-tailwindcss/components/form/input-text/index.html
- https://github.com/you-dont-need/You-Dont-Need-JavaScript#Floating
- https://csslayout.io/floating-label/
- https://tailwindcomponents.com/component/login-form-with-float-label-input

## License

[MIT License](https://opensource.org/licenses/MIT) (c) 2025

## TODO

- find information about plugins how to do it
- how to set variables
- update readme (no sticky, just remove input placeholder)
- block with multiple type of input (select, text area)
- block with size of inputs (lg, xs, sm)
