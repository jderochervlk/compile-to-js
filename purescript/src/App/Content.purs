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

import Affjax as AX
import Affjax.ResponseFormat (json)
import Affjax.Web (driver)
import Data.Argonaut.Core as J
import Data.Either (Either(..))
import Data.Maybe (Maybe(..))
import Data.MediaType.Common (applicationJavascript)
import Effect (Effect)
import Effect.Aff (Aff, launchAff)
import Effect.Class (class MonadEffect)
import Effect.Class.Console (log)
import Halogen (HalogenQ(..))
import Halogen as H
import Halogen.Aff.Driver.Eval (evalF)
import Halogen.HTML (a)
import Halogen.HTML as HH
import Halogen.HTML.Properties (action)
import Halogen.HTML.Properties as HP


type State = { value :: Array String }


initialState :: String -> State
initialState a = { value: [] }

data Action = Init

-- component :: forall query input output m. MonadEffect m => H.Component query input output m
component =
  H.mkComponent
    { initialState
    , render
    , eval: H.mkEval $ H.defaultEval
    { handleAction = handleAction 
    }
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

-- render :: State -> H.ComponentHTML Query

render __ = header

-- eval :: Query ~> H.Component State Query Message Aff

-- handleAction :: forall output m. MonadEffect m => Action -> H.HalogenM State Action () output m Unit
-- handleAction :: Effect Unit
handleAction = case _ of
  Init -> do
    result <- AX.get driver json "https://baconipsum.com/api/?type=meat-and-filler"
    case result of
      Left err -> log $ "GET /api response failed to decode: " <> AX.printError err
      Right response -> do
        log $ "GET /api response: " <> J.stringify response.body
