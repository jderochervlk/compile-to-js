module App.Intro where

import Prelude
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.HTML.Properties as HP

type State
  = { count :: Int }

data Action
  = Increment

component =
  H.mkComponent
    { initialState: \_ -> { count: 0 }
    , render
    , eval: H.mkEval H.defaultEval { handleAction = handleAction }
    }

render :: forall cs m. State -> H.ComponentHTML Action cs m
render state =
  HH.div [
    HP.classes [ 
        HH.ClassName "container"
      , HH.ClassName "mx-auto"
      , HH.ClassName "p-4"
      , HH.ClassName "bg-white"
      , HH.ClassName "h-screen" ]]
    [ HH.h1
        [ HP.classes [ HH.ClassName "text-4xl" ]]
        [ HH.text $ "PureScript and Halogen" ]
    ]
    ,    [ HH.h1
        [ HP.classes [ HH.ClassName "text-4xl" ]]
        [ HH.text $ "PureScript and Halogen" ]
    ]




handleAction = case _ of
  Increment -> H.modify_ \st -> st { count = st.count + 1 }
