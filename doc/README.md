# README

## Top-level Schemas

-   [Add a Concurrent](./add-concurrent.md "Add a new competitor") – `add-concurrent.json`
-   [Add a convention](./add-convention.md "Add a convention") – `add-convention.json`
-   [Add a difficulty](./add-difficulty.md "Add a new difficulty") – `add-difficulty.json`
-   [Add a game engine feature](./add-gameengine.md "Add a game engine feature") – `add-gameengine.json`
-   [Add a new digital store's feature](./add-digitalstore.md "Add a new digital store's feature") – `add-digitalstore.json`
-   [Add a new event](./add-event.md "Add a new event") – `add-event.json`
-   [Add a new game speed](./add-speed.md "Add a new game speed") – `add-speed.json`
-   [Add a new map size](./add-mapsize.md "Add a new map size (define the number of competitors)") – `add-mapsize.json`
-   [Add a new platform](./add-platform.md "Add a new platform") – `add-platform.json`
-   [Add a new theme](./add-theme.md "Add a theme") – `add-theme.json`
-   [Add a platform manufacturer](./add-manufacturer.md "Add a manufacturer") – `add-manufacturer.json`
-   [Add a translation](./add-translation.md "See the original translations: https&#x3A;//github") – `add-translation.json`
-   [Add an Indie company](./add-indie.md "Add an indie company") – `add-indie.json`
-   [Create a mod](./generic.md "Generic structure of a mod") – `mod.json`
-   [Rename a Manufacturer](./rename-manufacturer.md "Rename a manufacturer") – `rename-manufacturer.json`
-   [Rename a Platform](./rename-platform.md "Rename a platform") – `rename-platform.json`
-   [Rename a concurrent](./rename-concurrent.md "Rename a concurrent") – `rename-concurrent.json`
-   [Rename a convention](./rename-convention.md "Rename a convention") – `rename-convention.json`
-   [Rename an Indie company](./rename-indie.md "Rename an indie company") – `rename-indie.json`

## Other Schemas

### Objects

-   [Add Competitor: Game engine](./add-concurrent-properties-add-competitor-game-engine.md) – `add-concurrent.json#/properties/engine`
-   [Add platform - lifecycle: Ending date](./add-platform-properties-add-platform-lifecycle-properties-add-platform---lifecycle-ending-date.md "Discontinuation date of the platform") – `add-platform.json#/properties/duration/properties/end`
-   [Add platform - lifecycle: Starting date](./add-platform-properties-add-platform-lifecycle-properties-add-platform---lifecycle-starting-date.md "Release date of the platform") – `add-platform.json#/properties/duration/properties/start`
-   [Add platform: Costs](./add-platform-properties-add-platform-costs.md "Development and license costs") – `add-platform.json#/properties/cost`
-   [Add platform: Genre](./add-platform-properties-add-platform-genre.md "Platform/genre matches") – `add-platform.json#/properties/genre`
-   [Add platform: Lifecycle](./add-platform-properties-add-platform-lifecycle.md) – `add-platform.json#/properties/duration`
-   [Add platform: Online](./add-platform-properties-add-platform-online.md) – `add-platform.json#/properties/online`
-   [Add platform: Power](./add-platform-properties-add-platform-power.md) – `add-platform.json#/properties/power`
-   [Add platform: Target audience](./add-platform-properties-add-platform-target-audience.md) – `add-platform.json#/properties/age`
-   [Add platform: Textures](./add-platform-properties-add-platform-textures.md "Platform's textures") – `add-platform.json#/properties/texture`
-   [Add theme: Genre](./add-theme-properties-add-theme-genre.md "Theme/genre matches") – `add-theme.json#/properties/match`
-   [Add translation: Translations list](./add-translation-anyof-english-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/1/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-中国-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/9/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-русский-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/8/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-português-brasil-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/7/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-português-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/6/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-nederlands-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/5/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-other-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/13/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-español-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/3/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-deutsch-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/2/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-türkçe-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/10/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-日本語-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/12/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-français-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/0/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-한국의-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/11/properties/messages`
-   [Add translation: Translations list](./add-translation-anyof-italiano-properties-add-translation-translations-list.md "KEY: VALUE") – `add-translation.json#/anyOf/4/properties/messages`
-   [Generic action](./add-event-anyof-random-event-properties-actions-items-anyof-generic-action.md "This action can manipulate fanbase and money") – `add-event.json#/anyOf/0/properties/actions/items/anyOf/1`
-   [Generic action](./add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action.md "This action can manipulate fanbase and money") – `add-event.json#/anyOf/1/properties/actions/items/anyOf/1`
-   [Rename a Manufacturer](./generic-properties-root-addrename-manufacturers-properties-rename-manufacturer-rename-a-manufacturer.md "Rename a manufacturer") – `rename-manufacturer.json#/properties/manufacturer/properties/rename/items`
-   [Rename a Platform](./generic-properties-root-addrename-platform-properties-rename-platform-rename-a-platform.md "Rename a platform") – `rename-platform.json#/properties/platform/properties/rename/items`
-   [Rename a concurrent](./generic-properties-root-addrename-competitors-properties-rename-competitor-rename-a-concurrent.md "Rename a concurrent") – `rename-concurrent.json#/properties/concurrent/properties/rename/items`
-   [Rename a convention](./generic-properties-root-add-conventions-properties-rename-a-convention-rename-a-convention.md "Rename a convention") – `rename-convention.json#/properties/convention/properties/rename/items`
-   [Rename an Indie company](./generic-properties-root-addrename-indie-company-properties-rename-an-indie-company-rename-an-indie-company.md "Rename an indie company") – `rename-indie.json#/properties/indie/properties/rename/items`
-   [Root: Add an event](./generic-properties-root-add-an-event.md "To manipulate events") – `mod.json#/properties/event`
-   [Root: Add conventions](./generic-properties-root-add-conventions.md "To manipulate conventions") – `mod.json#/properties/convention`
-   [Root: Add difficulty](./generic-properties-root-add-difficulty.md "To manipulate custom difficulties") – `mod.json#/properties/difficulty`
-   [Root: Add digital store feature](./generic-properties-root-add-digital-store-feature.md "To manipulate digital store") – `mod.json#/properties/digitalstore`
-   [Root: Add game engine feature](./generic-properties-root-add-game-engine-feature.md "To manipulate game engine") – `mod.json#/properties/gameengine`
-   [Root: Add game speed](./generic-properties-root-add-game-speed.md "To manipulate game speeds") – `mod.json#/properties/speed`
-   [Root: Add internationalization](./generic-properties-root-add-internationalization.md "To manipulate translations") – `mod.json#/properties/translation`
-   [Root: Add map size](./generic-properties-root-add-map-size.md "To manipulate map sizes") – `mod.json#/properties/mapsize`
-   [Root: Add themes](./generic-properties-root-add-themes.md "To manipulate themes") – `mod.json#/properties/theme`
-   [Root: Add/rename Indie company](./generic-properties-root-addrename-indie-company.md "To manipulate indie companies") – `mod.json#/properties/indie`
-   [Root: Add/rename competitors](./generic-properties-root-addrename-competitors.md "To manipulate concurrents") – `mod.json#/properties/concurrent`
-   [Root: Add/rename manufacturers](./generic-properties-root-addrename-manufacturers.md "To manipulate manufacturers") – `mod.json#/properties/manufacturer`
-   [Root: Add/rename platform](./generic-properties-root-addrename-platform.md "To manipulate platforms") – `mod.json#/properties/platform`
-   [Studio happinness/productivity](./add-event-anyof-scheduled-event-properties-actions-items-anyof-studio-happinnessproductivity.md "This action can change the productivity/happiness of a studio") – `add-event.json#/anyOf/1/properties/actions/items/anyOf/0`
-   [Studio happinness/productivity](./add-event-anyof-random-event-properties-actions-items-anyof-studio-happinnessproductivity.md "This action can change the productivity/happiness of a studio") – `add-event.json#/anyOf/0/properties/actions/items/anyOf/0`
-   [Untitled object in Add a convention](./add-convention-properties-date.md "Date of the convention") – `add-convention.json#/properties/date`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-happiness-properties-bonus.md "Employee happiness bonus (Not implemented yet)") – `add-difficulty.json#/properties/happiness/properties/bonus`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-currency.md "Currency configuration") – `add-difficulty.json#/properties/currency`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-mortgage.md "Mortgage configuration") – `add-difficulty.json#/properties/mortgage`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-notation.md "Score configuration") – `add-difficulty.json#/properties/notation`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-iap.md "In-App purchase rate") – `add-difficulty.json#/properties/iap`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-happiness-properties-same_genre.md "Genre repetition") – `add-difficulty.json#/properties/happiness/properties/same_genre`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-happiness.md "Employee happiness configuration") – `add-difficulty.json#/properties/happiness`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-game_sales.md "Game sales configuration") – `add-difficulty.json#/properties/game_sales`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-contract.md "Contracts configuration") – `add-difficulty.json#/properties/contract`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-digital_store.md "Digital stores configuration") – `add-difficulty.json#/properties/digital_store`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-platform.md "Platforms configuration") – `add-difficulty.json#/properties/platform`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-postmortem.md "Post-mortem configuration (game report)") – `add-difficulty.json#/properties/postmortem`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-game_of_the_year.md "Game of the year configuration") – `add-difficulty.json#/properties/game_of_the_year`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-concurrent.md "Competitors configuration") – `add-difficulty.json#/properties/concurrent`
-   [Untitled object in Add a difficulty](./add-difficulty-properties-publishing.md "Publishing offers configuration") – `add-difficulty.json#/properties/publishing`
-   [Untitled object in Add a game engine feature](./add-gameengine-properties-availability.md "Date where the feature is available") – `add-gameengine.json#/properties/availability`
-   [Untitled object in Add a game engine feature](./add-gameengine-properties-cost.md "Costs of the feature") – `add-gameengine.json#/properties/cost`
-   [Untitled object in Add a new digital store's feature](./add-digitalstore-properties-effects-items.md "Add at least one effect and 3 at most") – `add-digitalstore.json#/properties/effects/items`
-   [Untitled object in Add a new event](./add-event-anyof-random-event-properties-conditions-items-anyof-0.md "Event won't if there is not enough studio") – `add-event.json#/anyOf/0/properties/conditions/items/anyOf/0`
-   [Untitled object in Add a new event](./add-event-anyof-random-event-properties-conditions-items-anyof-1.md "Event won't happen before the specified year") – `add-event.json#/anyOf/0/properties/conditions/items/anyOf/1`
-   [Untitled object in Add a new event](./add-event-anyof-random-event-properties-conditions-items-anyof-2.md "Event won't happen if the player doesn't own the number of specified furniture") – `add-event.json#/anyOf/0/properties/conditions/items/anyOf/2`
-   [Untitled object in Add a new event](./add-event-anyof-scheduled-event-properties-date.md) – `add-event.json#/anyOf/1/properties/date`
-   [Untitled object in Add a new event](./add-event-anyof-scheduled-event-properties-conditions-items-anyof-0.md "Event won't if there is not enough studio") – `add-event.json#/anyOf/1/properties/conditions/items/anyOf/0`
-   [Untitled object in Add a new event](./add-event-anyof-scheduled-event-properties-conditions-items-anyof-1.md "Event won't happen before the specified year") – `add-event.json#/anyOf/1/properties/conditions/items/anyOf/1`
-   [Untitled object in Add a new event](./add-event-anyof-scheduled-event-properties-conditions-items-anyof-2.md "Event won't happen if the player doesn't own the number of specified furniture") – `add-event.json#/anyOf/1/properties/conditions/items/anyOf/2`

### Arrays

-   [Add Competitor: Game engine royalties](./add-concurrent-properties-add-competitor-game-engine-properties-add-competitor-game-engine-royalties.md "Range for the concurrent engine royalties") – `add-concurrent.json#/properties/engine/properties/royalties`
-   [Add a convention](./generic-properties-root-add-conventions-properties-add-a-convention.md "Add a new conventions") – `mod.json#/properties/convention/properties/add`
-   [Add an event](./generic-properties-root-add-an-event-properties-add-an-event.md "Add an event") – `mod.json#/properties/event/properties/add`
-   [Add competitor](./generic-properties-root-addrename-competitors-properties-add-competitor.md "Add a new concurrent") – `mod.json#/properties/concurrent/properties/add`
-   [Add difficulty](./generic-properties-root-add-difficulty-properties-add-difficulty.md "Add a new difficulty") – `mod.json#/properties/difficulty/properties/add`
-   [Add digital store](./generic-properties-root-add-digital-store-feature-properties-add-digital-store.md "Add a new feature") – `mod.json#/properties/digitalstore/properties/add`
-   [Add engine feature](./generic-properties-root-add-game-engine-feature-properties-add-engine-feature.md "Add a new feature") – `mod.json#/properties/gameengine/properties/add`
-   [Add indie company](./generic-properties-root-addrename-indie-company-properties-add-indie-company.md "Add a new indie company") – `mod.json#/properties/indie/properties/add`
-   [Add manufacturer](./generic-properties-root-addrename-manufacturers-properties-add-manufacturer.md "Add a new manufacturer") – `mod.json#/properties/manufacturer/properties/add`
-   [Add map size](./generic-properties-root-add-map-size-properties-add-map-size.md "Add a new map size") – `mod.json#/properties/mapsize/properties/add`
-   [Add platform](./generic-properties-root-addrename-platform-properties-add-platform.md "Add a new platform") – `mod.json#/properties/platform/properties/add`
-   [Add platform - genre: Excellent match](./add-platform-properties-add-platform-genre-properties-add-platform---genre-excellent-match.md) – `add-platform.json#/properties/genre/properties/excellent`
-   [Add platform - genre: Good match](./add-platform-properties-add-platform-genre-properties-add-platform---genre-good-match.md) – `add-platform.json#/properties/genre/properties/good`
-   [Add platform - genre: Ok match](./add-platform-properties-add-platform-genre-properties-add-platform---genre-ok-match.md) – `add-platform.json#/properties/genre/properties/ok`
-   [Add platform - genre: Poor match](./add-platform-properties-add-platform-genre-properties-add-platform---genre-poor-match.md) – `add-platform.json#/properties/genre/properties/poor`
-   [Add speed](./generic-properties-root-add-game-speed-properties-add-speed.md "Add a new game speed") – `mod.json#/properties/speed/properties/add`
-   [Add theme](./generic-properties-root-add-themes-properties-add-theme.md "Add a new themes") – `mod.json#/properties/theme/properties/add`
-   [Add theme - genre: Excellent match](./add-theme-properties-add-theme-genre-properties-add-theme---genre-excellent-match.md) – `add-theme.json#/properties/match/properties/excellent`
-   [Add theme - genre: Good match](./add-theme-properties-add-theme-genre-properties-add-theme---genre-good-match.md) – `add-theme.json#/properties/match/properties/good`
-   [Add theme - genre: Ok match](./add-theme-properties-add-theme-genre-properties-add-theme---genre-ok-match.md) – `add-theme.json#/properties/match/properties/ok`
-   [Add theme - genre: Poor match](./add-theme-properties-add-theme-genre-properties-add-theme---genre-poor-match.md) – `add-theme.json#/properties/match/properties/poor`
-   [Add translations](./generic-properties-root-add-internationalization-properties-add-translations.md "Add a new translation") – `mod.json#/properties/translation/properties/add`
-   [Rename a convention](./generic-properties-root-add-conventions-properties-rename-a-convention.md "Rename a conventions") – `mod.json#/properties/convention/properties/rename`
-   [Rename an indie company](./generic-properties-root-addrename-indie-company-properties-rename-an-indie-company.md "Rename a indie company") – `mod.json#/properties/indie/properties/rename`
-   [Rename competitor](./generic-properties-root-addrename-competitors-properties-rename-competitor.md "Rename a concurrent") – `mod.json#/properties/concurrent/properties/rename`
-   [Rename manufacturer](./generic-properties-root-addrename-manufacturers-properties-rename-manufacturer.md "Rename a manufacturer") – `mod.json#/properties/manufacturer/properties/rename`
-   [Rename platform](./generic-properties-root-addrename-platform-properties-rename-platform.md "Rename a platform") – `mod.json#/properties/platform/properties/rename`
-   [Untitled array in Add a convention](./add-convention-properties-size.md "Game size to boost (Selected game sizes will get extra visitors)") – `add-convention.json#/properties/size`
-   [Untitled array in Add a difficulty](./add-difficulty-properties-concurrent-properties-penalty.md "Range Penality of trade-publishing games (if you fail to meet the expectations)") – `add-difficulty.json#/properties/concurrent/properties/penalty`
-   [Untitled array in Add a difficulty](./add-difficulty-properties-perfect_employee_cost.md "Salary range of a perfect employee (lower/higher)") – `add-difficulty.json#/properties/perfect_employee_cost`
-   [Untitled array in Add a difficulty](./add-difficulty-properties-concurrent-properties-note.md "Range Games scores for trade-publishing games") – `add-difficulty.json#/properties/concurrent/properties/note`
-   [Untitled array in Add a difficulty](./add-difficulty-properties-happiness-properties-bonus-properties-ratios.md "Amount of happiness restored by the bonus") – `add-difficulty.json#/properties/happiness/properties/bonus/properties/ratios`
-   [Untitled array in Add a difficulty](./add-difficulty-properties-concurrent-properties-income_ratio.md "Range Used to compute the prepayment of a trade-publishing deal prepayment = note \* income_ratio") – `add-difficulty.json#/properties/concurrent/properties/income_ratio`
-   [Untitled array in Add a difficulty](./add-difficulty-properties-concurrent-properties-fanbase.md "Range Fans gained per game published") – `add-difficulty.json#/properties/concurrent/properties/fanbase`
-   [Untitled array in Add a difficulty](./add-difficulty-properties-publishing-properties-ratios.md "Efficiency of the previous parameters (the higher the better)") – `add-difficulty.json#/properties/publishing/properties/ratios`
-   [Untitled array in Add a difficulty](./add-difficulty-properties-mortgage-properties-interests.md "Mortgage interests (in percent)") – `add-difficulty.json#/properties/mortgage/properties/interests`
-   [Untitled array in Add a difficulty](./add-difficulty-properties-mortgage-properties-duration.md "Mortgage duration in years (minimum / maximum)") – `add-difficulty.json#/properties/mortgage/properties/duration`
-   [Untitled array in Add a difficulty](./add-difficulty-properties-concurrent-properties-currency.md "Range Money made when a competitor makes a game") – `add-difficulty.json#/properties/concurrent/properties/currency`
-   [Untitled array in Add a new digital store's feature](./add-digitalstore-properties-effects.md "Effect of this feature") – `add-digitalstore.json#/properties/effects`
-   [Untitled array in Add a new event](./add-event-anyof-scheduled-event-properties-conditions.md "List of conditions before activating this event") – `add-event.json#/anyOf/1/properties/conditions`
-   [Untitled array in Add a new event](./add-event-anyof-random-event-properties-conditions.md "List of conditions before activating this event") – `add-event.json#/anyOf/0/properties/conditions`
-   [Untitled array in Add a new event](./add-event-anyof-scheduled-event-properties-actions.md "List of available actions") – `add-event.json#/anyOf/1/properties/actions`
-   [Untitled array in Add a new event](./add-event-anyof-random-event-properties-actions.md "List of available actions") – `add-event.json#/anyOf/0/properties/actions`