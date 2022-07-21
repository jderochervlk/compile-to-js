module App.Intro where

import Prelude

import Halogen (Component)
import Halogen as H
import Halogen.HTML (HTML)
import Halogen.HTML as HH
import Halogen.HTML.Properties as HP

component ∷ ∀ (output44 ∷ Type) (m45 ∷ Type -> Type) (t58 ∷ Type -> Type) (t61 ∷ Type). Component t58 t61 output44 m45
component =
  H.mkComponent
    { initialState: \_ -> {  }
    , render
    , eval: H.mkEval H.defaultEval 
    }

render ∷ ∀ (t6 ∷ Type) (w7 ∷ Type) (i8 ∷ Type). t6 → HTML w7 i8
render __ =
  HH.div [
    HP.classes [ 
        HH.ClassName "container"
      , HH.ClassName "mx-auto"
      , HH.ClassName "p-4"
      , HH.ClassName "bg-white"
      , HH.ClassName "h-screen" ]
      ]
    [ HH.h1
        [ HP.classes [ HH.ClassName "text-4xl" ]]
        [ HH.text $ "PureScript and Halogen" ]
      , HH.p
        [ HP.classes [ HH.ClassName "mt-2" ]]
        [ HH.text $ " A basic application written with PureScript and Halogen." ]
    ]