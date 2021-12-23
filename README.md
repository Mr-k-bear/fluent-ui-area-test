# aria-labelledby on div element in detailslist missing reference

link issue: https://github.com/microsoft/fluentui/issues/21116

### Environment Information

- **Package version(s)**: fluentui/react@8.48.0
- **Browser and OS versions**: Edge (Version 96.0.1054.62) in Windows 10 Pro (Version 10.0.19043)

### Describe the issue:

In the DetailsList component, the checkbox in each row has a div element with the ```aria-labelledby``` attribute.

The second reference label of this ```aria-labelledby``` does not exist.

For example, in the following situation.

![case](https://github.com/Mr-k-bear/fluent-ui-area-test/blob/master/case/case.png?raw=true)

The ```row-0-header``` reference in the yellow box in the figure does not exist.

### Check out this whole case on github:

https://github.com/Mr-k-bear/fluent-ui-area-test

### Additional information:

This problem was first discovered when scanning through the [WAVE](https://microsoftedge.microsoft.com/addons/detail/wave-evaluation-tool/khapceneeednkiopkkbgkibbdoajpkoj) plug-in.

The case project above was created with ```npx create-react-app my-app --template @fluentui/cra-template```.

#### Actual behavior:

aria-labelledby reference does not exist.

#### Expected behavior:

The reference of ```aria-labelledby``` exists, or do not use ```aria-labelledby```.

### Documentation describing expected behavior

https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby
