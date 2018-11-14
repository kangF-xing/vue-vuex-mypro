import Vue from "vue";
import Router from "vue-router";
import index from "../views/goods/index";
import Sort from "../views/order/sort";
import Cart from "../views/order/cart";
import Mine from "../views/order/mine.vue";
import Group from "../views/center/groupBooking.vue";
import StoreUp from "../views/order/storeUp.vue";
import SortList from "../views/order/sortList.vue";
import Giftcertificate from "../views/order/Giftcertificate.vue";
import cutPrice from "../views/order/cutPrice.vue";
import strictSelection from "../views/order/strictSelection.vue";
import cutDetails from "../views/order/cutDetails.vue";
import ColumnDetails from "../views/order/ColumnDetails.vue";
import MyOrder from "../views/order/MyOrder.vue";
import MyAddress from "../views/order/MyAddress.vue";
import MyAddressValue from "../views/order/MyAddressValue.vue";
import payOrder from "../views/order/pay/payOrder.vue";
import payPrice from "../views/order/pay/payPrice.vue";
import cutdetailsChildXQ from "../components/order/cutPrice/cupDetailsChildXQ.vue";
import cutdetailsChildPJ from "../components/order/cutPrice/cupDetailsChildPJ.vue";
import groupChildPJ from "../components/center/groupChildPJ.vue";
import groupChildXQ from "../components/center/groupChildXQ.vue";
import Register from "../components/order/register/register.vue";
import GroupShow from "../components/center/groupShow.vue";
import MyOrderDropAppraise from "../components/order/mine/MyOrderDropAppraise.vue";
import MyOrderDropCollect from "../components/order/mine/MyOrderDropCollect.vue";
import MyOrderdropShipping from "../components/order/mine/MyOrderdropShipping.vue";
import MyOrderWaitPrice from "../components/order/mine/MyOrderWaitPrice.vue";
import MyOrderOffTheStocks from "../components/order/mine/MyOrderOffTheStocks.vue";
import cupLump from "../components/order/cutPrice/cupLump.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: index,
      children: []
    },
    {
      path: "/sort",
      component: Sort
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/mine",
      component: Mine
    },
    {
      path: "/group/:id?",
      component: Group,
      children: [
        {
          path: "/",
          component: groupChildXQ
        },
        {
          path: "/groupChildPJ/:id?",
          component: groupChildPJ
        },
        {
          path: "/GroupShow/:id?",
          component: GroupShow
        }
      ]
    },
    {
      path: "/storeup",
      component: StoreUp
    },
    {
      path: "/sortlist",
      component: SortList
    },
    {
      path: "/giftcertificate",
      component: Giftcertificate
    },
    {
      path: "/cutprice",
      component: cutPrice
    },
    {
      path: "/strictselection",
      component: strictSelection
    },
    {
      path: "/cutdetails/:id?",
      component: cutDetails,
      children: [
        {
          path: "/",
          component: cutdetailsChildXQ
        },
        {
          path: "/cutdetailsChildPJ/:id?",
          component: cutdetailsChildPJ
        }
      ]
    },
    {
      path: "/columndetails",
      component: ColumnDetails
    },
    {
      path: "/myorder",
      component: MyOrder,
      children: [
        {
          path: "/",
          component: MyOrderWaitPrice
        },
        {
          path: "/MyOrderdropShipping",
          component: MyOrderdropShipping
        },
        {
          path: "/MyOrderDropCollect",
          component: MyOrderDropCollect
        },
        {
          path: "/MyOrderDropAppraise",
          component: MyOrderDropAppraise
        },
        {
          path: "/MyOrderOffTheStocks",
          component: MyOrderOffTheStocks
        }
      ]
    },
    {
      path: "/myaddress",
      component: MyAddress
    },
    {
      path: "/myaddressvalue",
      component: MyAddressValue
    },
    {
      path: "/payorder",
      component: payOrder
    },
    {
      path: "/payprice",
      component: payPrice
    },
    {
      path: "/register/:id?",
      component: Register
    },
    {
      path: "/cupLump/",
      component: cupLump
    }
  ]
});
