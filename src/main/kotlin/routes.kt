package us.littlebets.cleaversetup

import dev.alpas.routing.Router
import us.littlebets.cleaversetup.controllers.WelcomeController

fun Router.addRoutes() = apply {
    get("/", WelcomeController::index).name("welcome")
}
