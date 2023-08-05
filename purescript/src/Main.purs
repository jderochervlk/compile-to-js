module Main where

import Prelude

import App.Intro as Intro
import App.Content as Content
import Effect (Effect)
import Halogen.Aff as HA
import Halogen.VDom.Driver (runUI)

main :: Effect Unit
main = HA.runHalogenAff do
  body <- HA.awaitBody
  runUI Content.component unit body



-- f = fetch