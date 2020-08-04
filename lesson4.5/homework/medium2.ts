// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип

type FIXME =
  | Partial<React.ComponentClass<{}, any>>
  | Partial<React.FunctionComponent<{}> | undefined>;

// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): FIXME => {
  return component.defaultProps;
};
