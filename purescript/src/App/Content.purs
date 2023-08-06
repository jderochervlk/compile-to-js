module App.Content
  ( State
  , component
  , header
  , initialState
  , render
  , renderItem
  )
  where

import Prelude

import Data.Maybe (Maybe(..))
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HP

type State = Maybe Unit


initialState :: Unit -> State
initialState _ = Nothing

-- component :: forall query input output m. MonadEffect m => H.Component query input output m
component :: forall a b c. H.Component c Unit a b
component =
  H.mkComponent
    { initialState
    , render
    , eval: H.mkEval $ H.defaultEval
    }

header :: forall w i. HH.HTML w i
header = HH.div [
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
        [ HH.text $ "A basic application written with PureScript and Halogen." ],
        HH.a 
          [ HP.href "https://www.purescript.org/"
          , HP.classes [HH.ClassName "text-blue-500" ] 
          ] [HH.text $ "PureScript"]
      , HH.br []    
      , HH.a
          [ HP.href "https://purescript-halogen.github.io/purescript-halogen/"
          , HP.classes [HH.ClassName "text-blue-500" ]
          ]
          [HH.text $ "Halogen - a front-end framework for PureScript"]
      , HH.div [] (map renderItem text)
    ]

text :: Array String
text = [
  "This page does not fetch any live data. I spent a few days on it and since PureScript is Haskell-ish doing Effects is complicated."
  , "Overall, I can see and understand the power of PureScript, but it has a steep learning curve. It would probably be a good choice for a company that was already using Haskell on the backend."]

renderItem ∷ forall w i. String -> HH.HTML w i
renderItem a = HH.p [] [HH.text $ a]


render ∷ Maybe Unit -> forall w i. HH.HTML w i
render __ = header