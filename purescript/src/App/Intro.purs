module App.Intro where

import Prelude
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HP

type State
  = Unit

initialState :: forall input. input -> State
initialState _ = unit

component :: forall query input output m. H.Component query input output m
component =
  H.mkComponent
    { initialState
    , render
    , eval: H.mkEval H.defaultEval
    }

header :: forall w i. HH.HTML w i
header =
  HH.div
    [ HP.classes
        [ HH.ClassName "container"
        , HH.ClassName "mx-auto"
        , HH.ClassName "p-4"
        , HH.ClassName "bg-white"
        , HH.ClassName "h-screen"
        ]
    ]
    [ HH.h1
        [ HP.classes [ HH.ClassName "text-4xl" ] ]
        [ HH.text $ "PureScript and Halogen?!?!?!?!" ]
    , HH.p
        [ HP.classes [ HH.ClassName "mt-2" ] ]
        [ HH.text $ " A basic application written with PureScript and Halogen." ]
    ]

render :: forall w i. State -> HH.HTML w i
render __ = header
