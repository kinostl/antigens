# What is this?

This is a battle program program that uses an incredibly pared down version of [NetBattlers!](link.to.beta.six)

#Entities

This is built in an entity style to help with organization and allow for an element style of rules resolution

## Battle Maps

A 2D collection of Panels receiving actions from a contained AntiGen to use against Panels. Every contestant has two panels with their color.

## Panels

Contain the AntiGens and pass along the results of received actions to their contained AntiGen

## AntiGens

The Battle Programs that reside inside of Panels, and are able to transfer between them using Transport actions. Every round they randomly choose an action and execute it.

### NCPs

Effect the AntiGen in specific ways. Stat increases, Random Action preference modifiers, etc.

## Actions

Commands that are bubbled up to the Panel the AntiGen is currently contained in. Very often have random results.

#### Attacks

Sends random damage towards the panel with the enemy. Difficulty changes based on distance.

#### Transfers

Teleports the AntiGen to their other Panel.

#### Full Defense

Ensures any attack commands they receive have a max damage of 1 each.

### Chips

Able to generate a specific Action on the AntiGen's behalf. Usually with secondary effects or specific results.



