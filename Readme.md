# React stacks

# Usage

```tsx
<HStack spacing={8}>
	<Text>Hello</Text>
	<Text>World</Text>
</HStack>

<VStack spacing={8}>
	<Text>Hello</Text>
	<Text>World</Text>
</VStack>
```

# Api

| name               | type            | description                                                                                   |
| ------------------ | --------------- | --------------------------------------------------------------------------------------------- |
| **spacing**        | number          | spacing between elements in pixel, as soon as gap is available, we will use flex: gap instead |
| **padding**        | number          | padding around the stack                                                                      |
| **margin**         | number          | margin around the stack                                                                       |
| **flex**           | boolean         | flex property, set to 1 if stack should grow                                                  |
| **alignItems**     | FlexAlignType   | align items in stack                                                                          |
| **justifyContent** | FlexJustifyType | justify content in stack                                                                      |
| **debug**          | boolean         | add a visual debug flag                                                                       |
