# purescript

* It was hard to understand where to start
* Spago?
* It looks like I should use Halogen
* vscode doesn't work
* It looks like vscode is recommended?
* Why won't it compile?
* How do I build an app?
* HH.h1 is different from HH.h1_
* This documentation is awful
* why can't I add a new paragraph?







Hers is the first thing you see when you open the Halogen docs:
```
module Main where

import Prelude

import Effect (Effect)
import Halogen as H
import Halogen.Aff as HA
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.VDom.Driver (runUI)

main :: Effect Unit
main = HA.runHalogenAff do
  body <- HA.awaitBody
  runUI component unit body

data Action = Increment | Decrement

component =
  H.mkComponent
    { initialState
    , render
    , eval: H.mkEval $ H.defaultEval { handleAction = handleAction }
    }
  where
  initialState _ = 0

  render state =
    HH.div_
      [ HH.button [ HE.onClick \_ -> Decrement ] [ HH.text "-" ]
      , HH.div_ [ HH.text $ show state ]
      , HH.button [ HE.onClick \_ -> Increment ] [ HH.text "+" ]
      ]

  handleAction = case _ of
    Increment -> H.modify_ \state -> state + 1
    Decrement -> H.modify_ \state -> state - 1

```



a legit error 
```Error found:
in module App.Intro
at src/App/Intro.purs:24:3 - 37:6 (line 24, column 3 - line 37, column 6)

  Could not match type
        
    HTML
        
  with type
            
    Function
            

while applying a function (div [ classes [ ... 
                                         , ... 
                                         , ... 
                                         , ... 
                                         , ... 
                                         ]     
                               ]               
                          )                    
                          [ (h1 [ ...          
                                ]              
                            )                  
                            [ ...              
                            ]                  
                          ]                    
  of type HTML t2 t3
  to argument [ p [ (...) "butts"
                  ]              
              ]                  
while checking that expression ((div [ ...    
                                     ]        
                                )             
                                [ (...) [ ... 
                                        ]     
                                ]             
                               )              
                               [ p [ ...      
                                   ]          
                               ]              
  has type HTML (ComponentSlot cs0 m1 Action) Action
in value declaration render

where cs0 is a rigid type variable
        bound at (line 0, column 0 - line 0, column 0)
      m1 is a rigid type variable
        bound at (line 0, column 0 - line 0, column 0)
      t2 is an unknown type
      t3 is an unknown type

See https://github.com/purescript/documentation/blob/master/errors/TypesDoNotUnify.md for more information,
or to contribute content related to this error.
```