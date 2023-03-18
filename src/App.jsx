import style from "./App.module.css"
import { Restaurant,Clock, Point } from "./assets/icons"
import useWidth from "./hooks/useWidth"
import { useEffect } from "react"


function App() {
  const {width} = useWidth()
  

  return (
    <div className={style.app}>
      <h1>Classic Cheesecake Recipe</h1>
      <div className={style.subText}><Point/><span>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</span></div>
      <img src="img/photo1.png"/>
      <div className={style.ingredientContainer}>
      <div className={`${style.timeCard_hidden} ${style.timeCard}`}>
          
         <ul>
          <li>
          <Restaurant width={width>540? 35:20}/>
            <div>
              <span>Yields</span>
              <span>12 servings</span>
            </div>
          </li>
          <li>
            <Clock width={width>540? 28:14}/>
            <div>
              <span>Prep TIme</span>
              <span>45 minutes</span>
            </div>
          </li>
          <li>
            <Clock width={width>540? 28:14}/>
            <div>
              <span>Cook Time </span>
              <span>1 hour</span>
            </div>
          </li>
          <li>
            <Clock width={width>540? 28:14}/>
            <div>
              <span>Total Time</span>
              <span>7,75 hours</span>
            </div>
          </li>
         </ul>
        </div>
        <div className={style.ingredient}>
          <h3>Ingredients</h3>
          <h4>Graham Cracker Crust</h4>
          <ul>
            <li><label className={style.checkbox}><input type="checkbox"/><span className={style.custom_checkbox}/><span>1 and 1/2 cups (150g) <span>graham cracker crumbs</span> (about 10 full sheet graham crackers)</span></label> </li>
            <li><label className={style.checkbox}><input type="checkbox"/><span className={style.custom_checkbox}/><span>5 Tablespoons (70g) <span>unsalted butter</span>, melted</span></label> </li>
            <li><label className={style.checkbox}><input type="checkbox"/><span className={style.custom_checkbox}/><span>1/4 cup (50g) <span>granulated sugar</span></span></label> </li>
          
          </ul>
          <h4>Cheesecake</h4>
          <ul>
            <li><label className={style.checkbox}><input type="checkbox"/><span className={style.custom_checkbox}/><span>four 8-ounce blocks (904g) full-fat <span>cream cheese</span>, softened to room temperature</span></label>  </li>
            <li><label className={style.checkbox}><input type="checkbox"/><span className={style.custom_checkbox}/><span>1 cup (200g) <span>granulated sugar</span></span></label>  </li>
            <li><label className={style.checkbox}><input type="checkbox"/><span className={style.custom_checkbox}/><span>1 cup (240g) full-fat <span>sour cream</span>, at room temperature</span></label>  </li>
            <li><label className={style.checkbox}><input type="checkbox"/><span className={style.custom_checkbox}/><span>1 teaspoon <span>pure vanilla extract</span></span></label>  </li>
            <li><label className={style.checkbox}><input type="checkbox"/><span className={style.custom_checkbox}/><span>2 teaspoons <span>fresh lemon juice</span> (optional, but recommended)</span></label>  </li>
            <li><label className={style.checkbox}><input type="checkbox"/><span className={style.custom_checkbox}/><span>3 large <span>eggs</span>, at room temperature</span></label>  </li>
            <li><label className={style.checkbox}><input type="checkbox"/><span className={style.custom_checkbox}/><span>topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) </span></label> </li>
          </ul>
        </div>
        <div className={style.timeCard}>
         <ul>
          <li>
            <Restaurant width={35}/>
            <div>
              <span>Yields</span>
              <span>12 servings</span>
            </div>
          </li>
          <li>
            <Clock width={28}/>
            <div>
              <span>Prep TIme</span>
              <span>45 minutes</span>
            </div>
          </li>
          <li>
            <Clock width={28}/>
            <div>
              <span>Cook Time </span>
              <span>1 hour</span>
            </div>
          </li>
          <li>
            <Clock width={28}/>
            <div>
              <span>Total Time</span>
              <span>7,75 hours</span>
            </div>
          </li>
         </ul>
        </div>
      </div>
      <div className={style.instructions}>
        <h3>Instructions</h3>
        <ul className={style.instructionsList}>
          <li>
            <div><span>1</span></div>
            <p>Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).</p>
          </li>
          <li>
            <div><span>2</span></div>
            <p><span>Make the crust:</span> Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.</p>
          </li>
          <li>
            <div><span>3</span></div>
            <p><span>Make the filling:</span> Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.</p>
          </li>
          <li>
            <div><span>4</span></div>
            <p><span>Prepare the simple water bath (see note)</span> Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)</p>
          </li>
          <li>
            <div><span>5</span></div>
            <p>Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.</p>
          </li>
          <li>
            <div><span>6</span></div>
            <p>Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.</p>
          </li>
          <li>
            <div><span>7</span></div>
            <p>Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.</p>
          </li>
        </ul>
      </div>
      <span className={style.source}>Source: <a href="https://sallysbakingaddiction.com/classic-cheesecake/" target={"_blank"}>https://sallysbakingaddiction.com/classic-cheesecake/</a> </span>
      <div className={style.footer}>created by <span>Gonzalo-Erceg</span> - <a href="https://devchallenges.io" target={"_blank"}>devChallenges.io</a></div>
    </div>
  )
}

export default App
