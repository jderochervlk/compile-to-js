module App.Content where

import Prelude

import Data.Array (mapWithIndex)
import Data.Maybe (Maybe(..), maybe)
import Effect (Effect)
import Effect.Class (class MonadEffect)
import Effect.Class.Console (log)
import Halogen as H
import Halogen.Aff as HA
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.HTML.Properties (list)
import Halogen.HTML.Properties as HP
import Halogen.VDom.Driver (runUI)

data Action
  = Initialize
  | Regenerate

type State = Array String

initialState :: forall input. input -> State
initialState _ = []

component :: forall query input output m. H.Component query input output m
component =
  H.mkComponent
    { initialState
    , render
    , eval: H.mkEval H.defaultEval 
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
        [ HH.text $ "PureScript and Halogen?!?!?!?!" ]
      , HH.p
        [ HP.classes [ HH.ClassName "mt-2" ]]
        [ HH.text $ " A basic application written with PureScript and Halogen." ]
      , HH.div [] (map renderItem  ["foo", "bar"])
    ]


renderItem ∷ forall w i. String -> HH.HTML w i
renderItem a = HH.p [] [HH.text $ a]

render :: forall w i. State -> HH.HTML w i
render __ = header

handleAction = case _ of
  Regenerate -> do
    newArr <- []
    H.put newArr