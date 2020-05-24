# 11 Занятие - Ract JS

## Контекст

Контекст позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на промежуточных уровнях.

## HOC (Higher-Order Component)

HOC (компонент высшего порядка) — это функция, которая принимает компонент и возвращает новый компонент.

Паттерн позволяет переиспользовать компонентную логику.

```txt
                          HOC
       Component      +---------+   Other Component
                      |         |
+-------------------->+         +--------------------->
                      |         |
                      +---------+

```

```jsx
const SomeHOC = (Component) => {
  const WrappedContainer = (props) => {
    return <Component foo="bar" {...props} />;
  }

  return WrappedContainer;
}
```

Пример исполльзования [HOC](https://codesandbox.io/s/10-lesson-hoc-example-w7tsp).

## Hooks (Хуки)

[Хуки](https://ru.reactjs.org/docs/hooks-intro.html) — это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного цикла React из функциональных компонентов.

Основные React хуки:

- `useState`
- `useEffect`
- `useContext`

Ознакомиться детально со всеми хуками можно [ТУТ](https://ru.reactjs.org/docs/hooks-reference.html).
