module Foo
  ( main
  )
  where

import Prelude

import Affjax (AffjaxDriver)
import Affjax as AX
import Affjax.RequestBody (json)
import Affjax.RequestBody as AXR
import Affjax.ResponseFormat as ResponseFormat
import Affjax.Web (driver)
import Data.Argonaut.Core as J
import Data.Either (Either(..))
import Data.HTTP.Method (Method(..))
import Data.Maybe (Maybe(..))
import Effect (Effect)
import Effect.Aff (launchAff)
import Effect.Class.Console (log)

main :: Effect Unit 
main = void $ launchAff $ do
  result1 <- AX.get driver ResponseFormat.json "/api"
  case result1 of
    Left err -> log $ "GET /api response failed to decode: " <> AX.printError err
    Right response -> log $ "GET /api response: " <> J.stringify response.body