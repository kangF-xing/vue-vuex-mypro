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
import Mygift from "../components/order/mine/MyGift.vue";
Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
      children: []
    },
    {
      path: "/sort",
      name: "Sort",
      component: Sort
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/mine",
      name: "Mine",
      component: Mine
    },
    {
      path: "/group/:id?",
      name: "Group",
      component: Group,
      children: [
        {
          path: "/",
          name: "groupChildXQ",
          component: groupChildXQ
        },
        {
          path: "/groupChildPJ/:id?",
          name: "groupChildPJ",
          component: groupChildPJ
        },
        {
          path: "/GroupShow/:id?",
          name: "GroupShow",
          component: GroupShow
        }
      ]
    },
    {
      path: "/storeup",
      name: "StoreUp",
      component: StoreUp
    },
    {
      path: "/sortlist",
      name: "SortList",
      component: SortList
    },
    {
      path: "/giftcertificate",
      name: "Giftcertificate",
      component: Giftcertificate
    },
    {
      path: "/cutprice",
      name: "cutPrice",
      component: cutPrice
    },
    {
      path: "/strictselection",
      name: "strictSelection",
      component: strictSelection
    },
    {
      path: "/cutdetails/:id?",
      name: "cutDetails",
      component: cutDetails,
      children: [
        {
          path: "/",
          name: "cutdetailsChildXQ",
          component: cutdetailsChildXQ
        },
        {
          path: "/cutdetailsChildPJ/:id?",
          name: "cutdetailsChildPJ",
          component: cutdetailsChildPJ
        }
      ]
    },
    {
      path: "/columndetails",
      name: "ColumnDetails",
      component: ColumnDetails
    },
    {
      path: "/myorder",
      name: "MyOrder",
      component: MyOrder,
      children: [
        {
          path: "/",
          name: "MyOrderWaitPrice",
          component: MyOrderWaitPrice
        },
        {
          path: "/MyOrderdropShipping",
          name: "MyOrderdropShipping",
          component: MyOrderdropShipping
        },
        {
          path: "/MyOrderDropCollect",
          name: "MyOrderDropCollect",
          component: MyOrderDropCollect
        },
        {
          path: "/MyOrderDropAppraise",
          name: "MyOrderDropAppraise",
          component: MyOrderDropAppraise
        },
        {
          path: "/MyOrderOffTheStocks",
          name: "MyOrderOffTheStocks",
          component: MyOrderOffTheStocks
        }
      ]
    },
    {
      path: "/myaddress",
      name: "MyAddress",
      component: MyAddress
    },
    {
      path: "/myaddressvalue",
      name: "MyAddressValue",
      component: MyAddressValue
    },
    {
      path: "/payorder",
      name: "payOrder",
      component: payOrder
    },
    {
      path: "/payprice",
      name: "payPrice",
      component: payPrice
    },
    {
      path: "/register/:id?",
      name: "Register",
      component: Register
    },
    {
      path: "/cupLump/:id?",
      name: "cupLump",
      component: cupLump
    },
    {
      path: "/mygift/:id?",
      name: "Mygift",
      component: Mygift
    }
  ]
});
