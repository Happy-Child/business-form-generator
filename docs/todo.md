- Всем компонентам формы можно выставить флаги readOnly, required;

- Возможность генерации более одной формы на странице;

- Placeholder если нет компонента по типу;

- Анимации

- Продумать как релазовать компоненты: credit card, multifield

- валидация вхожных параметров на уникальность и другое и возврат ошибок | JSON schema всё таки может помояь?

- ТОЧТО НУЖНО ДАВАТЬ МЕНЯТЬ ВСЕ ПОЛЯ, А НЕ ОДНО VALUE?

- куда-то засунуть возможность форматирования value перед отправкой в formKey.

- НАПИСАТЬ CAHTPGPT ДРУГИЕ СПЕЦЕФИЧ. КОМПОНЕНТЫ И ПОПРОСИТЬ ПЕРЕЧИСЛИТЬ ВСЕ ВОЗМОДНО ПОХОЖИЕ (load data and select, recapcha, multifields on plus ...)

- Не понятно как будет хранить данные multifield (допустим после перезагр. стр. должно остаться)

- Protected fields on change

- проверить перерендеры компонентов (только те, которые обновляются)

- предусмотреть вариант заполенние стора до рендеринга (для ssr тоже)

- ошибка ts если нет обязательного набора полей у кастомных комп (properties.value и др)

- добавить onblur и доуголе в form input

- удалить вложенные components в componentsStateMap (чтобы не вводить в заблуждение)

- СКАЛЛИ, скрины всех форм который там были - можно ли их всех реализовать тут.
