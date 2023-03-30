import React from "react";
import europe from '../Pictures/Europe.jpg'
// import Tooltip from './Tooltip'

const tooltip = document.querySelector('.tooltip');
const countries = document.querySelectorAll('.Country');

let name = "";

countries.forEach(country => {
    country.addEventListener('mousemove', function(){
        // tooltip.innerText = this.dataset.title;
    });    
});

function Europe(){
    return(
        <div class="Europe">
            <img src={europe} alt="Европа"/>

            <svg viewBox="0 0 1920 1080">
                <path data-title="Беларусь" class="Country" d="m 1154.6136,543.79391 c 1.4686,-0.0865 0.8595,-2.32672 1.8969,-2.84543 0.094,-0.0471 0.2417,0.0745 0.3162,0 0.1832,-0.18325 0.4491,-1.08139 0.6323,-1.26464 0.074,-0.0745 0.2417,0.0745 0.3162,0 0.074,-0.0745 -0.074,-0.24164 0,-0.31616 0.5171,-0.51716 2.8588,-0.63232 3.7939,-0.63232 0.6934,0 1.9829,-0.23019 2.5293,0.31616 0.074,0.0745 0,0.21078 0,0.31616 0,1.30025 -5.2,0.17474 -4.4263,0.94848 0.721,0.72092 8.6466,-1.24998 9.4848,1.26464 0.3272,0.98168 -0.4595,2.55867 0,3.47775 0.067,0.1333 0.2495,0.18285 0.3162,0.31616 0.095,0.19089 -0.1462,0.80233 0,0.94848 0.4215,0.42154 0.3033,-0.67068 0.6323,0.31615 0.067,0.19996 -0.094,0.4438 0,0.63232 0.047,0.0943 0.2416,-0.0745 0.3161,0 0.051,0.0512 0.2779,0.92932 0.3162,0.94848 0.1885,0.0943 0.4438,-0.0943 0.6323,0 0.094,0.0471 -0.047,0.2219 0,0.31616 0.1333,0.26661 0.499,0.36571 0.6323,0.63232 0.047,0.0943 -0.075,0.24164 0,0.31616 0.075,0.0745 0.2417,-0.0745 0.3162,0 0.074,0.0745 -0.075,0.24164 0,0.31616 0.074,0.0745 0.2416,-0.0745 0.3162,0 0.074,0.0745 -0.075,0.24164 0,0.31616 0.1182,0.11824 2.7271,0.11824 2.8454,0 0.1518,-0.15177 0.4363,-1.06867 0.6323,-1.26464 0.1491,-0.14904 0.4833,0.14904 0.6323,0 0.017,-0.0171 0.6152,-0.93135 0.6324,-0.94848 0.1554,-0.15543 1.1938,-0.24538 1.2646,-0.31616 0.149,-0.14904 -0.094,-0.44379 0,-0.63232 0.047,-0.0943 0.2219,0.0471 0.3161,0 0.3339,-0.16693 0.639,-0.47754 0.9485,-0.63231 0.2108,-0.10539 0.1054,-0.52694 0.3162,-0.63232 0.1885,-0.0943 0.4438,0.0943 0.6323,0 0.1118,-0.0559 -0.1311,-0.40871 0.3162,-0.63232 0.3317,-0.16585 1.3284,0.25234 1.5808,0 0.074,-0.0745 -0.075,-0.24164 0,-0.31616 0.149,-0.14904 0.4832,0.14904 0.6323,0 0.074,-0.0745 -0.074,-0.24164 0,-0.31616 0.1159,-0.11592 0.7798,0.0421 0.9485,0 0.7443,-0.18608 1.5146,-0.31484 2.2131,-0.63232 3.4871,-1.58507 -1.627,-0.50476 3.4777,-1.89695 0.4067,-0.11092 0.8733,0.15655 1.2647,0 0.2188,-0.0875 0.1053,-0.52694 0.3161,-0.63232 0.6835,-0.34174 2.6247,0 3.4778,0 0.1302,0 0.8648,-0.0837 0.9484,0 0.1104,0.11036 -0.1312,0.88286 0,0.94848 0.5569,0.27842 0.6079,-0.0244 0.9485,0.31615 0.074,0.0745 -0.075,0.24164 0,0.31616 0.1269,0.12686 1.7203,0.22784 1.897,0.31616 0.3023,0.15115 1.4167,0.46827 1.5808,0.63232 0.074,0.0745 -0.094,0.26903 0,0.31616 0.314,0.15699 2.0542,0.19741 2.5292,0.31616 0.8782,0.21953 1.413,0.99791 2.2132,1.26464 0.1999,0.0666 0.4323,-0.0667 0.6323,0 0.9868,0.32894 -0.1054,0.21077 0.3161,0.63232 0.1491,0.14903 0.4438,-0.0943 0.6324,0 0.2107,0.10538 0.4656,0.14952 0.6323,0.31615 0.074,0.0745 -0.094,0.26903 0,0.31616 0.2494,0.28279 0.6657,-0.14139 0.9485,0 0.4357,0.21785 0.4253,0.74148 0.6323,0.94848 0.149,0.14904 0.4438,-0.0943 0.6323,0 0.4357,0.21785 0.4253,0.74148 0.6323,0.94848 0.069,0.0686 0.6015,0.25452 0.6323,0.31616 0.2681,0.53617 0,5.94011 0,6.9555 0,0.45285 -0.2882,2.55722 0,2.84544 0.075,0.0745 0.2417,-0.0745 0.3162,0 0.149,0.14903 -0.149,0.48328 0,0.63231 0.4215,0.42155 0.3034,-0.67067 0.6323,0.31616 0.1062,0.31868 0.1123,0.74464 0.3162,0.94848 0.074,0.0745 0.2416,-0.0745 0.3161,0 0.074,0.0745 -0.075,0.24164 0,0.31616 0.1462,0.14615 0.7576,-0.0954 0.9485,0 0.1333,0.0666 0.1829,0.24951 0.3162,0.31616 0.1885,0.0943 0.4832,-0.14904 0.6323,0 0.069,0.0686 0.2545,0.6015 0.3161,0.63232 0.4216,0.21077 1.1593,-0.21077 1.5808,0 0.4716,0.23576 0.7824,0.70733 1.2647,0.94848 0.4361,0.21804 0.2828,-0.38289 0.6323,0.31616 0.4177,0.83536 -0.044,6.13875 -0.3162,6.9555 -0.2949,0.88483 -1.1498,1.66729 -1.5808,2.52927 -0.3032,0.60645 0,2.18324 0,2.84544 0,0.21077 -0.149,0.48328 0,0.63231 0.075,0.0745 0.2417,-0.0745 0.3162,0 0.2805,0.28049 0.7338,1.68232 0.9485,1.89696 0.2005,0.20054 1.0014,-0.13162 1.2646,0 0.1333,0.0666 0.1829,0.24951 0.3162,0.31616 0.8188,0.4094 6.9469,-0.32473 7.2716,0 0.3406,0.3406 0.038,0.39163 0.3162,0.94848 0.1054,0.21077 0.5269,0.10538 0.6323,0.31616 0.094,0.18852 -0.094,0.44379 0,0.63231 0.067,0.13331 0.269,0.17477 0.3162,0.31616 0.2353,0.70591 -0.3314,1.86655 0,2.52928 0.2117,0.42345 0.7542,0.43808 0.9484,0.63232 0.196,0.19597 0.4806,1.11287 0.6324,1.26463 0.6413,0.64132 3.4609,0.30775 4.11,0.63232 0.8283,0.41412 1.1569,1.99766 1.5808,2.84544 0.3484,0.6967 1.0943,1.28884 1.5808,1.89695 1.6851,2.10628 0.1133,0.0236 0.6323,1.5808 0.1249,0.3745 0.7708,0.59297 0.9485,0.94847 0.047,0.0943 -0.074,0.24164 0,0.31616 0.074,0.0745 0.2417,-0.0745 0.3162,0 0.074,0.0745 -0.074,0.24164 0,0.31616 0.074,0.0745 0.2416,-0.0745 0.3161,0 0.075,0.0745 -0.074,0.24164 0,0.31616 0.3918,0.39172 2.2692,-0.14408 2.8455,0 0.2286,0.0572 0.4087,0.24164 0.6323,0.31616 1.4136,0.4712 3.0919,-0.35099 4.4262,0.31616 0.1885,0.0943 0.457,-0.11691 0.6323,0 0.2481,0.16534 0.3843,0.46698 0.6324,0.63232 0.5357,0.35718 2.0875,-0.44175 2.5292,0 0.075,0.0745 -0.074,0.24164 0,0.31616 0.1491,0.14904 0.4438,-0.0943 0.6324,0 1.3157,0.65789 -0.338,-0.0218 0.3161,0.63232 0.1943,0.19424 0.7368,0.20887 0.9485,0.63232 0.094,0.18852 -0.094,0.44379 0,0.63231 0.3271,0.65431 0.3162,1.0978 0.3162,1.89696 0,0.10539 -0.094,0.26903 0,0.31616 0.1885,0.0943 0.4437,-0.0943 0.6323,0 0.1885,0.0943 -0.067,0.43236 0,0.63232 0.7633,2.29007 -0.091,-0.49846 0.6323,0.94848 0.094,0.18852 -0.094,0.44379 0,0.63231 0.1054,0.21078 0.5269,0.10539 0.6323,0.31616 0.094,0.18852 -0.094,0.4438 0,0.63232 0.019,0.0383 0.8973,0.26497 0.9485,0.31616 0.074,0.0745 -0.074,0.24164 0,0.31616 0.078,0.078 1.8189,0.078 1.8969,0 0.075,-0.0745 -0.074,-0.24164 0,-0.31616 0.1052,-0.10519 1.2009,0.0213 1.2647,0 0.2828,-0.0943 0.3657,-0.49901 0.6323,-0.63232 0.2497,-0.12483 0.6818,0.0889 0.9485,0 2.29,-0.76336 -0.4985,0.0912 0.9485,-0.63232 0.5534,-0.27673 3.597,0 4.4262,0 0.1972,0 1.7359,-0.16103 1.8969,0 0.075,0.0745 -0.075,0.24164 0,0.31616 0.075,0.0745 0.2108,0 0.3162,0 0.2108,0.10539 0.4657,0.14953 0.6323,0.31616 0.6542,0.65415 -0.9996,-0.0256 0.3162,0.63232 0.1953,0.0977 1.1474,0.19897 1.2646,0.31616 0.074,0.0745 -0.074,0.24164 0,0.31616 0.149,0.14904 0.4833,-0.14904 0.6323,0 0.1538,0.15382 0.5346,1.21575 0.6323,1.26464 0.1886,0.0943 0.4324,-0.0667 0.6324,0 0.2058,0.0686 2.1276,0.86301 2.2131,0.94847 0.075,0.0745 -0.047,0.2219 0,0.31616 0.2715,0.54301 0.8269,1.14309 1.2646,1.5808 0.2108,0.21077 0.3657,0.49901 0.6323,0.63232 0.1886,0.0943 0.4833,-0.14904 0.6324,0 0.6541,0.65414 -0.9997,-0.0256 0.3161,0.63232 0.314,0.15696 2.0534,0.15648 2.2131,0.31616 0.074,0.0745 -0.074,0.24164 0,0.31616 0.1584,0.15839 1.0574,0.10889 1.2647,0.31615 0.075,0.0745 -0.094,0.26903 0,0.31616 0.423,0.21154 1.8817,-0.33134 2.2131,0 0.149,0.14904 0,0.42155 0,0.63232 0,0.40212 0.2559,2.27333 0,2.52928 -0.075,0.0745 -0.2219,-0.0471 -0.3162,0 -1.3158,0.65789 0.338,-0.0218 -0.3161,0.63231 -0.1581,0.15808 -0.4743,0.15808 -0.6324,0.31616 -0.074,0.0745 0.094,0.26903 0,0.31616 -0.1885,0.0943 -0.4323,-0.0666 -0.6323,0 -0.4441,0.14805 -0.491,0.66595 -0.6323,0.94848 -0.1897,0.37939 -0.7588,0.56909 -0.9485,0.94848 -0.2722,0.54451 0.2956,3.18222 0,3.47775 -0.6541,0.65415 0.026,-0.99962 -0.6323,0.31616 -0.096,0.19161 -0.1837,0.81599 -0.3161,0.94848 -0.075,0.0745 -0.2219,-0.0471 -0.3162,0 -1.0844,0.54218 -0.7542,0.71357 -1.5808,1.26463 -1.4462,0.96413 -1.9021,3.16416 -3.1616,3.79392 -0.8002,0.40012 -1.5943,0.95299 -2.5293,1.26463 -0.5776,0.19256 -8.1385,0.19891 -8.5363,0 -0.1312,-0.0656 0.1104,-0.83812 0,-0.94848 -0.074,-0.0745 -0.2416,0.0745 -0.3161,0 -0.074,-0.0745 0.074,-0.24164 0,-0.31615 -0.074,-0.0745 -0.2417,0.0745 -0.3162,0 -0.074,-0.0745 0.047,-0.2219 0,-0.31616 -0.2076,-0.4152 -0.9302,-0.46511 -1.2646,-0.63232 -0.4585,-0.22923 -0.6412,-1.27346 -0.9485,-1.5808 -0.149,-0.14904 -0.4215,0 -0.6323,0 -0.7408,0 -2.2369,-0.30429 -2.8455,0 -0.1333,0.0667 -0.1747,0.26903 -0.3161,0.31616 -0.2,0.0666 -0.4833,-0.14904 -0.6323,0 -0.032,0.0323 -0.2374,1.107 -0.3162,1.26464 -0.373,0.74598 -1.3729,1.05675 -1.8969,1.58079 -0.069,0.0686 -0.2546,0.6015 -0.3162,0.63232 -0.1885,0.0943 -0.4438,-0.0943 -0.6323,0 -0.3771,0.18852 0,0.84309 0,1.26464 0,0.65087 0.1416,3.76108 0.3161,4.11007 0.067,0.1333 0.2495,0.18285 0.3162,0.31616 0.1686,0.33724 -0.1686,0.9274 0,1.26464 0.3907,0.78135 0.3162,-0.10914 0.3162,0.63231 0,1.08022 -0.1054,-0.79039 0.6323,0.31616 0.1753,0.26306 -0.1,0.64855 0,0.94848 0.084,0.25168 0.7739,0.14157 0.9484,0.31616 0.075,0.0745 -0.074,0.24164 0,0.31616 0.1065,0.10648 6.2062,-0.23405 6.6394,0.63232 0.094,0.18852 -0.067,0.43236 0,0.63232 0.074,0.22356 0.2416,0.40876 0.3162,0.63232 0.084,0.25267 -0.1784,1.08629 0,1.26463 0.074,0.0745 0.2416,-0.0745 0.3161,0 0.3538,0.35375 -0.3293,3.13538 0,3.79391 0.067,0.13331 0.2495,0.18286 0.3162,0.31616 0.1264,0.25293 -0.1265,0.69555 0,0.94848 0.7234,1.44694 -0.1311,-1.3416 0.6323,0.94848 0.06,0.17881 -0.127,0.82149 0,0.94848 0.1771,0.17706 0.4821,0.18164 0.6323,0.63231 0.067,0.19996 -0.094,0.4438 0,0.63232 0.1054,0.21078 0.5269,0.10539 0.6323,0.31616 0.2838,0.56761 0.3639,1.36012 0.6323,1.89696 0.5102,1.02021 1.4673,1.24007 1.897,2.52927 0.4358,1.30734 0.6468,0.66132 0.9485,1.26464 0.094,0.18852 -0.094,0.4438 0,0.63232 0.3015,0.60304 0.015,0.34543 0.3161,0.94847 0.047,0.0943 0.2691,-0.0943 0.3162,0 0.094,0.18853 -0.067,0.43237 0,0.63232 0.1956,0.58682 0.6724,0.0802 0.9485,0.63232 0.1302,0.26049 0.1282,0.44441 0.3161,0.63232 0.075,0.0745 0.2417,-0.0745 0.3162,0 0.074,0.0745 -0.074,0.24164 0,0.31616 0.074,0.0745 0.2416,-0.0745 0.3162,0 0.074,0.0745 -0.075,0.24164 0,0.31616 0.074,0.0745 0.2416,-0.0745 0.3161,0 0.074,0.0745 -0.074,0.24164 0,0.31616 0.074,0.0745 0.2417,-0.0745 0.3162,0 0.074,0.0745 -0.074,0.24164 0,0.31616 0.074,0.0745 0.2416,-0.0745 0.3161,0 0.1404,0.14033 0.8663,1.49856 0.9485,1.58079 0.1266,0.12655 0.4018,0.17123 0.6323,0.63232 0.094,0.18852 -0.149,0.48328 0,0.63232 0.049,0.0493 1.2455,0.0192 0.6323,0.63232 -0.3622,0.36226 -4.6935,-0.36497 -5.0585,0 -0.075,0.0745 0.074,0.24164 0,0.31616 -0.4066,0.40664 -1.739,0.39525 -2.2131,0.63232 -0.094,0.0471 0.094,0.26903 0,0.31616 -0.1462,0.0731 -1.7729,0.19208 -1.897,0.31616 -0.074,0.0745 0.094,0.26902 0,0.31615 -0.1885,0.0943 -0.4438,-0.0943 -0.6323,0 -0.094,0.0471 0.074,0.24164 0,0.31616 -0.1581,0.15808 -0.4742,0.15808 -0.6323,0.31616 -0.074,0.0745 0.074,0.24164 0,0.31616 -0.074,0.0745 -0.2417,-0.0745 -0.3162,0 -0.074,0.0745 0.074,0.24164 0,0.31616 -0.177,0.17706 -0.4821,0.18164 -0.6323,0.63232 -0.067,0.19996 0.094,0.4438 0,0.63232 -0.094,0.18852 -0.4833,-0.14904 -0.6323,0 -0.149,0.14904 0.149,0.48328 0,0.63232 -0.306,0.30595 -0.5018,0.0928 -0.9485,0.31616 -1.3158,0.65789 0.338,-0.0218 -0.3161,0.63231 -0.3162,0.31616 -1.5808,-0.31615 -1.897,0 -0.074,0.0745 0.075,0.24164 0,0.31616 -0.1914,0.19143 -1.6667,0 -1.897,0 -0.1301,0 -0.8647,-0.0837 -0.9484,0 -0.3293,0.32931 -0.1561,2.36917 -0.3162,2.52928 -0.074,0.0745 -0.2416,-0.0745 -0.3162,0 -0.6541,0.65414 0.9997,-0.0256 -0.3161,0.63232 -0.094,0.0471 -0.2417,-0.0745 -0.3162,0 -0.1538,0.15381 -0.5345,1.21575 -0.6323,1.26463 -0.1885,0.0943 -0.4438,-0.0943 -0.6323,0 -0.062,0.0308 -0.2476,0.56372 -0.3162,0.63232 -0.075,0.0745 -0.269,-0.0943 -0.3161,0 -0.094,0.18852 0.067,0.43236 0,0.63232 -0.1092,0.32748 -0.4755,0.63483 -0.6323,0.94848 -0.1317,0.26323 0.2005,1.06409 0,1.26464 -0.075,0.0745 -0.2417,-0.0745 -0.3162,0 -0.1462,0.14614 0.095,0.75758 0,0.94847 -0.1333,0.26661 -0.499,0.36571 -0.6323,0.63232 -0.1249,0.24967 0.089,0.68185 0,0.94848 -0.5567,1.66994 -0.3162,3.58384 -0.3162,5.37471 0,0.35117 -0.2235,1.98955 0,2.21311 0.075,0.0745 0.2417,-0.0745 0.3162,0 0.1054,0.10539 0.2108,0.84309 0.3161,0.94848 0.075,0.0745 0.2417,-0.0745 0.3162,0 0.1054,0.10539 0.2108,0.84309 0.3162,0.94848 0.074,0.0745 0.2416,-0.0745 0.3161,0 0.1637,0.16364 0.1525,1.10099 0.3162,1.26463 0.074,0.0745 0.2416,-0.0745 0.3161,0 0.075,0.0745 0,0.21078 0,0.31616 0.2108,0.10539 0.4363,0.18545 0.6324,0.31616 0.1053,0.10539 0.2107,0.21078 0.3161,0.31616 0,0.10539 -0.074,0.24164 0,0.31616 0.074,0.0745 0.2417,-0.0745 0.3162,0 0.149,0.14904 -0.1491,0.48328 0,0.63232 0.074,0.0745 0.2219,-0.0471 0.3161,0 0.8191,0.40955 0.8437,0.73877 1.2647,1.5808 0.3906,0.78135 0.3161,-0.10914 0.3161,0.63231 0,0.17099 1.0121,1.51724 0.6323,1.89696 -0.3258,0.32587 -1.8872,-0.01 -2.2131,0.31616 -0.074,0.0745 0.074,0.24164 0,0.31616 -0.133,0.133 -1.1488,-0.0579 -1.2646,0 -0.094,0.0471 0.074,0.24164 0,0.31616 -0.1933,0.19329 -2.5455,0.1 -2.8454,0 -0.4665,-0.1555 -0.8669,-0.49974 -1.2647,-0.63232 -0.2968,-0.0989 -1.8228,-0.24207 -1.8969,-0.31616 -0.075,-0.0745 0.074,-0.24164 0,-0.31616 -0.3459,-0.34588 -1.562,-0.29734 -1.897,-0.63232 -0.075,-0.0745 0.074,-0.24164 0,-0.31616 -0.149,-0.14904 -0.4833,0.14904 -0.6323,0 -0.1581,-0.15808 -0.1581,-0.47424 -0.3162,-0.63232 -0.149,-0.14903 -0.4438,0.0943 -0.6323,0 -0.9967,-0.49833 -2.2842,-0.31615 -3.4777,-0.31615 -0.4447,0 -1.1626,-0.1394 -1.5808,0 -0.9005,0.30015 -0.6347,0.95087 -1.2647,1.58079 -0.069,0.0693 -1.4016,0.85887 -1.5808,0.94848 -0.6584,0.32923 -0.5752,0.91995 -1.2646,1.26464 -0.9206,0.46029 -7.5024,-0.4016 -7.5878,-0.31616 -0.1581,0.15808 -0.1581,0.47424 -0.3162,0.63232 -0.1054,0.10538 -0.8431,0.21077 -0.9485,0.31615 -0.149,0.14904 0.1886,0.53806 0,0.63232 -0.1885,0.0943 -0.4438,-0.0943 -0.6323,0 -0.2325,0.11628 -0.2436,1.07029 -0.6323,1.26464 -0.1909,0.0954 -0.8023,-0.14615 -0.9485,0 -0.074,0.0745 0.074,0.24164 0,0.31616 -0.149,0.14904 -0.4438,-0.0943 -0.6323,0 -0.7801,0.39005 -0.4729,0.6715 -1.5808,0.94848 -0.1022,0.0256 -0.269,-0.0943 -0.3162,0 -0.094,0.18852 0.094,0.44379 0,0.63232 -0.028,0.0556 -2.4347,0.0945 -2.5292,0 -0.074,-0.0745 0,-0.21078 0,-0.31616 -0.2108,0 -0.4438,0.0943 -0.6323,0 -0.2259,-0.11295 0.1923,-1.3885 0,-1.5808 -0.075,-0.0745 -0.2417,0.0745 -0.3162,0 -0.149,-0.14904 0.149,-0.48328 0,-0.63232 -0.074,-0.0745 -0.2416,0.0745 -0.3162,0 -0.074,-0.0745 0.075,-0.24164 0,-0.31616 -0.074,-0.0745 -0.2219,0.0471 -0.3161,0 -1.3158,-0.65789 0.338,0.0218 -0.3162,-0.63232 -0.074,-0.0745 -0.2416,0.0745 -0.3161,0 -0.075,-0.0745 0.074,-0.24164 0,-0.31616 -0.2635,-0.26346 -1.0012,-0.0527 -1.2647,-0.31615 -0.149,-0.14904 0.094,-0.4438 0,-0.63232 -0.061,-0.12098 -1.6011,-0.80056 -1.8969,-0.94848 -0.4684,-0.2342 -1.6779,0 -2.2131,0 -0.6192,0 -2.3506,0.0962 -2.5293,0.63232 -0.067,0.19995 0.094,0.4438 0,0.63232 -0.047,0.0943 -0.2219,-0.0471 -0.3162,0 -0.3794,0.18969 -0.5691,0.75878 -0.9485,0.94847 -0.094,0.0471 -0.2416,-0.0745 -0.3161,0 -0.2108,0.21078 0.2108,1.05387 0,1.26464 -0.074,0.0745 -0.2417,-0.0745 -0.3162,0 -0.2523,0.25235 0.1659,1.2491 0,1.5808 -0.067,0.1333 -0.2495,0.18285 -0.3161,0.31616 -0.094,0.18852 0.149,0.48328 0,0.63231 -0.075,0.0745 -0.2417,-0.0745 -0.3162,0 -0.1461,0.14615 0.095,0.75759 0,0.94848 -0.2529,0.50586 -1.0117,0.75878 -1.2646,1.26464 -0.047,0.0943 0.074,0.24164 0,0.31616 -0.4467,0.4467 -1.7246,-1.23606 -1.897,-1.5808 -0.094,-0.18852 0.1491,-0.48328 0,-0.63232 -0.149,-0.14903 -0.4833,0.14904 -0.6323,0 -0.074,-0.0745 0.075,-0.24164 0,-0.31616 -0.1636,-0.16364 -1.101,-0.15251 -1.2646,-0.31615 -0.075,-0.0745 0.074,-0.24164 0,-0.31616 -0.1581,-0.15808 -0.4743,-0.15808 -0.6324,-0.31616 -0.074,-0.0745 0,-0.21078 0,-0.31616 -0.1053,-0.10539 -0.1921,-0.23349 -0.3161,-0.31616 -0.6309,-0.42057 -1.2415,-0.30457 -1.897,-0.63232 -0.7047,-0.35235 -3.7936,8e-5 -4.7424,-0.31616 -0.1414,-0.0471 -0.1828,-0.24951 -0.3161,-0.31616 -0.2828,-0.14139 -0.6486,0.1 -0.9485,0 -0.1186,-0.0395 -0.8299,-0.59279 -0.9485,-0.63232 -0.3582,-0.11941 -0.9296,0.16751 -1.2646,0 -0.7814,-0.39068 0.1091,-0.31616 -0.6323,-0.31616 -0.2999,0 -1.7061,-0.19092 -1.897,0 -0.4742,0.47424 0.4742,2.3712 0,2.84544 -0.1126,0.11256 -0.9373,0.30503 -0.9485,0.31616 -0.074,0.0745 0.075,0.24164 0,0.31616 -0.4229,0.42291 -4.572,-0.40133 -5.3747,0 -0.1885,0.0943 0.1491,0.48328 0,0.63231 -0.018,0.0183 -0.9241,0.62015 -0.9485,0.63232 -1.3157,0.65789 0.338,-0.0218 -0.3161,0.63232 -0.1448,0.14482 -1.1398,0.0665 -1.2646,0.31616 -0.094,0.18852 0.094,0.4438 0,0.63232 -0.047,0.0943 -0.2417,-0.0745 -0.3162,0 -0.1581,0.15808 -0.1581,0.47424 -0.3162,0.63232 -0.149,0.14904 -0.4215,0 -0.6323,0 -0.4021,0 -2.2733,0.25595 -2.5293,0 -0.3374,-0.33739 -0.055,-0.74258 -0.3161,-1.26464 -0.3305,-0.66094 -0.755,-0.0613 -1.2647,-0.31616 -0.094,-0.0471 0.075,-0.24164 0,-0.31616 -0.2413,-0.24131 -1.4426,0 -1.8969,0 -0.4009,0 -4.0752,-0.0348 -4.1101,0 -0.074,0.0745 0.074,0.24164 0,0.31616 -0.149,0.14904 -0.4215,0 -0.6323,0 -0.7979,0 -2.7448,0.3665 -3.4778,0 -0.4357,-0.21785 -0.4253,-0.74148 -0.6323,-0.94848 -0.069,-0.0686 -0.6015,-0.25451 -0.6323,-0.31616 -0.1414,-0.28278 0.2828,-0.80708 0,-0.94847 -0.6032,-0.30161 -0.6092,0.3623 -0.9485,-0.31616 -0.2291,-0.45829 -0.034,-1.28187 -0.6323,-1.5808 -0.4154,-0.20772 -5.8626,-0.15353 -6.3232,0 -0.9868,0.32895 0.1054,0.21077 -0.3161,0.63232 -0.074,0.0745 -0.2417,-0.0745 -0.3162,0 -0.074,0.0745 0.047,0.2219 0,0.31616 -0.1777,0.35551 -0.8236,0.57397 -0.9485,0.94848 -0.067,0.19995 0.1169,0.45694 0,0.63231 -0.1307,0.19608 -0.4657,0.14953 -0.6323,0.31616 -0.3583,0.35832 -0.4245,1.00264 -0.9485,1.26464 -1.3387,0.66936 -2.1625,-1.21403 -2.8454,-1.89695 -0.074,-0.0745 -0.2416,0.0745 -0.3162,0 -0.074,-0.0745 0.075,-0.24164 0,-0.31616 -0.2559,-0.25595 -2.1271,0 -2.5292,0 -0.7502,0 -0.9838,-0.0177 -1.5808,-0.31616 -0.6065,-0.30326 -2.4715,0 -3.1616,0 -1.1684,0 -3.0309,-0.35974 -4.1101,0 -1.3956,0.4652 1.1487,0.31616 -0.9485,0.31616 -0.1287,0 -1.2252,-0.0789 -1.2646,0 -0.094,0.18852 0.094,0.44379 0,0.63231 -0.015,0.0299 -2.5598,0 -3.4778,0 -1.1838,0 -2.4887,-0.17833 -3.4777,0.31616 -0.5059,0.25293 -1.3911,-0.25292 -1.897,0 -0.3682,0.18415 -0.5802,0.44818 -0.9484,0.63232 -0.7334,0.36669 -2.04,-0.20137 -2.8455,0 -0.6466,0.16166 -1.2503,0.47067 -1.8969,0.63232 -1.8846,0.47114 -4.1225,-0.47114 -6.0071,0 -0.5505,0.13765 -1.0302,0.49467 -1.5808,0.63232 -0.2848,0.0712 -1.3771,-0.20365 -1.5807,0 -0.075,0.0745 0.074,0.24164 0,0.31616 -0.3774,0.37736 -2.0082,0.45862 -2.5293,0.63232 -0.1414,0.0471 -0.1716,0.28001 -0.3162,0.31616 -0.4089,0.10224 -0.9665,-0.29808 -1.2646,0 -0.074,0.0745 0.094,0.26903 0,0.31616 -1.096,0.54801 -3.0141,-0.54801 -4.1101,0 -0.585,0.29252 -1.4172,1.02476 -1.8969,1.26463 -0.3398,0.16987 -0.8989,-0.12193 -1.2647,0 -0.4471,0.14904 -0.8074,0.51801 -1.2646,0.63232 -0.2045,0.0511 -0.4324,-0.0666 -0.6323,0 -0.1414,0.0471 -0.1716,0.28001 -0.3162,0.31616 -0.2276,0.0569 -2.0185,0.12154 -2.2131,0.31616 -0.1666,0.16663 -0.1495,0.46569 -0.3162,0.63232 -0.149,0.14904 -0.4832,-0.14904 -0.6323,0 -0.075,0.0745 0.074,0.24164 0,0.31616 -0.1041,0.10413 -3.5495,0.0717 -3.7939,0.31616 -0.6541,0.65414 0.9996,-0.0256 -0.3162,0.63232 -0.4786,0.23933 -0.7769,0.62337 -1.2646,0.94847 -0.8975,0.59835 -2.0319,0.76726 -2.8454,1.5808 -0.075,0.0745 0.074,0.24164 0,0.31616 -0.1833,0.18324 -1.0814,0.44907 -1.2647,0.63232 -0.2719,0.27197 0.1288,1.51071 0,1.89695 -0.074,0.22356 -0.2416,0.40876 -0.3161,0.63232 -0.4216,1.26464 0.5269,-0.52693 -0.3162,0.31616 -0.1103,0.11036 0.1313,0.88286 0,0.94848 -0.1885,0.0943 -0.4438,-0.0943 -0.6323,0 -0.038,0.0192 -0.265,0.89729 -0.3162,0.94848 -0.2818,0.28183 -0.9288,0.14827 -1.2646,0.31616 -0.8924,0.4462 -1.8082,1.23506 -2.8454,1.58079 -0.4168,0.13892 -1.2242,0.13787 -1.5808,0.31616 -0.094,0.0471 0.075,0.24164 0,0.31616 -0.02,0.89022 -0.7129,0.0805 -0.9485,0.31616 -0.074,0.0745 0.075,0.24164 0,0.31616 -0.045,0.0452 -1.3408,0.86848 -1.5808,0.94848 -0.5888,0.19626 -8.3143,0.26908 -8.8525,0 -0.264,-0.13202 -0.5931,-0.9289 -0.6323,-0.94848 -0.1885,-0.0943 -0.4438,0.0943 -0.6323,0 -0.2055,-0.10275 -0.3162,-1.3086 -0.3162,-1.5808 0,-0.74145 0.075,0.14904 -0.3161,-0.63232 -0.2918,-0.58356 0,-2.17935 0,-2.84543 0,-0.87616 -0.01,-0.6155 0.3161,-1.26464 0.3794,-0.7587 0,-4.4618 0,-5.3747 0,-0.45638 0.2094,-1.79432 0,-2.21312 -0.047,-0.0943 -0.2416,0.0745 -0.3161,0 -0.1302,-0.13022 -0.2459,-0.7377 -0.3162,-0.94848 -0.2209,-0.66275 -0.6036,-0.74737 -0.9485,-1.26463 -0.244,-0.36609 -0.7619,-1.71046 -0.9484,-1.89696 -0.3193,-0.31929 -3.5013,0.30442 -4.1101,0 -0.6644,-0.33221 -0.9586,-0.16312 -1.2646,-0.31616 -1.3158,-0.65789 0.3379,0.0218 -0.3162,-0.63232 -0.5196,-0.51964 -1.334,-0.66697 -1.897,-0.94847 -0.2666,-0.13331 -0.3657,-0.49902 -0.6323,-0.63232 -0.7787,-0.38935 0.2854,0.91772 -0.9484,-0.31616 -0.207,-0.207 -0.1967,-0.73063 -0.6324,-0.94848 -0.4361,-0.21805 -0.2828,0.38289 -0.6323,-0.31616 -0.047,-0.0943 0.074,-0.24164 0,-0.31616 -0.474,-0.47401 -0.9485,0.35838 -0.9485,-0.94848 0,-0.91948 -0.4022,-2.98935 0,-3.79391 0.2179,-0.4357 0.7415,-0.42532 0.9485,-0.63232 0.1491,-0.14903 -0.094,-0.44379 0,-0.63231 0.1054,-0.21078 0.5269,-0.10539 0.6323,-0.31616 0.094,-0.18852 -0.094,-0.4438 0,-0.63232 0.021,-0.0414 1.3781,-0.42958 1.5808,-0.63232 0.6542,-0.65415 -0.9996,0.0256 0.3162,-0.63232 0.1885,-0.0943 0.4438,0.0943 0.6323,0 0.4048,-0.20241 0.8431,-0.4918 1.2646,-0.63232 0.3,-0.1 0.6657,0.14139 0.9485,0 0.5253,-0.26266 0.9555,-0.42388 1.5808,-0.63232 0.1788,-0.0596 0.8215,0.12699 0.9485,0 0.074,-0.0745 -0.074,-0.24164 0,-0.31616 0.2356,-0.23565 0.6712,-0.13129 0.9485,-0.31615 0.6263,0.0316 0.1495,-0.46569 0.3161,-0.63232 0.075,-0.0745 0.2417,0.0745 0.3162,0 0.072,-0.0723 0.9124,-1.15629 0.9485,-1.26464 0.067,-0.19996 -0.067,-0.43236 0,-0.63232 -0.1182,-0.68876 0.5269,-0.10538 0.6323,-0.31616 0.094,-0.18852 -0.067,-0.43236 0,-0.63232 0.2154,-0.64638 0.8684,-0.98639 1.2646,-1.58079 0.058,-0.0877 -0.075,-0.24164 0,-0.31616 0.074,-0.0745 0.2417,0.0745 0.3162,0 0.5159,-0.51596 -0.3423,-2.47712 0,-3.16159 0.047,-0.0943 0.2416,0.0745 0.3161,0 0.1491,-0.14904 0,-0.42155 0,-0.63232 0,-0.95851 0.3046,-2.56408 0,-3.47775 -0.047,-0.1414 -0.2495,-0.18286 -0.3161,-0.31616 -0.096,-0.19089 0.1461,-0.80233 0,-0.94848 -0.4174,-0.41739 -0.7519,-0.35864 -0.9485,-0.94848 -0.067,-0.19996 0.051,-0.42784 0,-0.63232 -0.2482,-0.99278 -0.8516,-2.0193 -1.2646,-2.84543 -0.2149,-0.42971 -0.7337,-0.83493 -0.9485,-1.26464 -0.2815,-0.563 -0.4288,-1.37731 -0.9485,-1.89695 -0.1581,-0.15808 -0.4742,-0.15808 -0.6323,-0.31616 -0.2073,-0.20727 -0.1578,-1.10624 -0.3162,-1.26464 -0.149,-0.14904 -0.4832,0.14904 -0.6323,0 -0.4369,-0.4369 -1.0652,-2.56325 -1.2646,-3.16159 -0.311,-0.93286 -1.1755,-1.40241 -1.5808,-2.21312 -0.1536,-0.30725 -0.1626,-0.95738 -0.3162,-1.26463 -0.2117,-0.42345 -0.7542,-0.43808 -0.9485,-0.63232 -0.1053,-0.10539 -0.2107,-0.84309 -0.3161,-0.94848 -0.075,-0.0745 -0.2219,0.0471 -0.3162,0 -0.699,-0.34952 -0.098,-0.19622 -0.3161,-0.63232 -0.3918,-0.78356 -1.3508,-1.03465 -1.897,-1.5808 -0.2356,-0.23565 -0.081,-0.71282 -0.3161,-0.94847 -0.075,-0.0745 -0.2417,0.0745 -0.3162,0 -0.1581,-0.15808 -0.1581,-0.47424 -0.3162,-0.63232 -0.6541,-0.65415 0.026,0.99962 -0.6323,-0.31616 -0.047,-0.0943 0.074,-0.24164 0,-0.31616 -0.074,-0.0745 -0.2416,0.0745 -0.3161,0 -0.2236,-0.22356 0.1753,-0.68542 0,-0.94848 -0.7702,-1.15523 -0.4629,0.33899 -0.9485,-0.63232 -0.1771,-0.35407 -0.1491,-0.93039 -0.3162,-1.26463 -0.047,-0.0943 -0.269,0.0943 -0.3161,0 -0.5009,-1.00176 0.6542,-0.29422 -0.3162,-1.26464 -0.075,-0.0745 -0.269,0.0943 -0.3162,0 -0.1413,-0.28278 0.2236,-0.72492 0,-0.94848 -0.075,-0.0745 -0.2416,0.0745 -0.3161,0 -0.6062,-0.60617 -0.6215,-2.20228 -0.6323,-2.21311 -0.075,-0.0745 -0.2417,0.0745 -0.3162,0 -0.3276,-0.32757 0,-3.01486 0,-3.47775 0,-0.13019 -0.084,-0.86479 0,-0.94848 0.2108,-0.21077 1.0539,0.21077 1.2646,0 0.075,-0.0745 -0.075,-0.24164 0,-0.31616 0.1581,-0.15808 0.7904,0.15808 0.9485,0 0.074,-0.0745 -0.074,-0.24164 0,-0.31616 0.3022,-0.30217 2.7701,-0.55698 2.8455,-0.63232 0.074,-0.0745 -0.075,-0.24164 0,-0.31616 0.149,-0.14904 0.4832,0.14904 0.6323,0 0.074,-0.0745 -0.074,-0.24164 0,-0.31616 0.2969,-0.29697 1.853,-0.5884 2.2131,-0.94848 0.074,-0.0745 -0.075,-0.24164 0,-0.31615 0.1581,-0.15808 0.7904,0.15807 0.9485,0 0.074,-0.0745 -0.075,-0.24164 0,-0.31616 0.3035,-0.30351 1.4978,0.19957 1.8969,0 0.4055,-0.20276 0.8437,-0.80817 1.2647,-0.94848 0.4751,-0.15838 2.3561,-0.63232 2.8454,-0.63232 0.6042,0 3.3717,-0.4222 3.4777,-0.31616 0.2154,0.2154 0.2527,1.2011 0.3162,1.26464 0.1126,0.11257 0.9374,0.30503 0.9485,0.31616 0.074,0.0745 -0.074,0.24164 0,0.31616 0.149,0.14904 0.4833,-0.14904 0.6323,0 0.149,0.14904 -0.149,0.48328 0,0.63231 0.1914,0.19143 1.6667,0 1.897,0 0.1108,0 1.4598,0.12096 1.5807,0 0.1491,-0.14903 -0.149,-0.48327 0,-0.63231 0.1491,-0.14904 0.4833,0.14904 0.6324,0 0.1054,-0.10539 0.2107,-0.8431 0.3161,-0.94848 0.1491,-0.14904 0.4833,0.14904 0.6323,0 0.075,-0.0745 -0.075,-0.24164 0,-0.31616 0.075,-0.0745 0.2417,0.0745 0.3162,0 0.074,-0.0745 -0.047,-0.2219 0,-0.31616 0.3,-0.60009 1.3166,-1.07117 1.897,-1.26464 0.6286,-0.20953 1.6255,0.29378 2.2131,0 0.3683,-0.18414 0.5802,-0.44817 0.9485,-0.63232 0.094,-0.0471 0.2416,0.0745 0.3161,0 0.2108,-0.21077 -0.2108,-1.05386 0,-1.26463 0.075,-0.0745 0.2417,0.0745 0.3162,0 0.1332,-0.13325 0.2439,-1.68032 0.3161,-1.89696 0.1436,-0.43077 0.8442,-0.84732 0.9485,-1.26464 0.077,-0.30671 -0.1,-0.64854 0,-0.94847 0.074,-0.22356 0.5269,-0.10539 0.6323,-0.31616 0.2434,-0.48677 0.5396,-0.78123 1.2647,-1.26464 0.088,-0.0585 0.2416,0.0745 0.3161,0 0.074,-0.0745 -0.074,-0.24164 0,-0.31616 0.1491,-0.14904 0.4438,0.0943 0.6323,0 0.3794,-0.18969 0.5691,-0.75878 0.9485,-0.94848 0.4361,-0.21804 0.2828,0.38289 0.6323,-0.31616 0.047,-0.0943 -0.094,-0.26902 0,-0.31615 0.2694,-0.13468 1.022,-0.0735 1.2647,-0.31616 0.075,-0.0745 -0.074,-0.24164 0,-0.31616 0.1054,-0.10539 0.8431,-0.21078 0.9485,-0.31616 0.075,-0.0745 -0.094,-0.26903 0,-0.31616 0.1885,-0.0943 0.4323,0.0666 0.6323,0 0.2828,-0.0943 0.3495,-0.53806 0.6323,-0.63232 0.4407,-0.14689 1.5539,-0.28929 1.8969,-0.63232 0.075,-0.0745 -0.094,-0.26903 0,-0.31616 0.4216,-0.21077 1.1593,0.21077 1.5808,0 0.5129,-0.25641 1.0432,-0.67968 1.5808,-0.94848 0.1886,-0.0943 0.4833,0.14904 0.6324,0 0.075,-0.0745 -0.075,-0.24164 0,-0.31615 0.1049,-0.10495 2.4243,-0.10495 2.5292,0 0.1584,0.15839 0.1089,1.05736 0.3162,1.26463 0.149,0.14904 0.4833,-0.14904 0.6323,0 0.074,0.0745 -0.075,0.24164 0,0.31616 0.149,0.14904 0.4833,-0.14904 0.6323,0 0.1581,0.15808 0.1581,0.47424 0.3162,0.63232 0.078,0.0783 3.3634,0.43049 3.4777,0.31616 0.075,-0.0745 -0.074,-0.24164 0,-0.31616 0.2344,-0.23434 0.8723,0.0763 1.2647,-0.31616 0.2285,-0.2285 0.8136,-1.76206 0.9485,-1.89695 0.074,-0.0745 0.2416,0.0745 0.3161,0 0.105,-0.10495 0.105,-2.42434 0,-2.52928 -0.149,-0.14904 -0.4833,0.14904 -0.6323,0 -0.069,-0.0686 -0.2545,-0.6015 -0.3162,-0.63232 -0.3127,-0.15638 -3.0899,-0.24447 -3.4777,-0.63232 -0.4216,-0.42154 0.6707,-0.30337 -0.3162,-0.63231 -0.3945,-0.13151 -1.5631,-0.29844 -1.8969,-0.63232 -0.1581,-0.15808 -0.1581,-0.47424 -0.3162,-0.63232 -0.2179,-0.21789 -0.8018,-0.0227 -0.9485,-0.31616 -0.1469,-0.29388 -0.087,-4.39285 0,-4.74239 0.036,-0.14459 0.2495,-0.18285 0.3162,-0.31616 0.212,-0.42406 0.1169,-1.1822 0.3161,-1.58079 0.2283,-0.45647 0.4041,-0.80817 0.6324,-1.26464 0.2755,-0.55117 0,-7.62525 0,-8.22014 0,-0.39277 -0.3433,-3.76678 0,-4.11007 0.2645,-0.26449 1.598,-0.0173 1.8969,-0.31616 0.6542,-0.65415 -0.9996,0.0256 0.3162,-0.63232 0.3358,-0.16789 0.9828,-0.0343 1.2646,-0.31616 0.074,-0.0745 -0.047,-0.2219 0,-0.31616 0.1045,-0.2089 0.7557,-0.53591 0.9485,-0.63232 0.2529,-0.12646 0.6955,0.12647 0.9485,0 0.094,-0.0471 -0.074,-0.24164 0,-0.31616 0.149,-0.14904 0.4323,0.0667 0.6323,0 2.3958,-0.79858 -0.1142,0.11417 0.6323,-0.63232 0.058,-0.0582 0.8902,-0.2579 0.9485,-0.31615 0.3688,-0.36886 -0.053,-1.52811 0.3161,-1.89696 0.017,-0.0171 0.9314,-0.61519 0.9485,-0.63232 0.3162,-0.31616 0,-1.26464 0.3162,-1.58079 0.074,-0.0745 0.2416,0.0745 0.3161,0 0.1581,-0.15808 0.1581,-0.47424 0.3162,-0.63232 0.149,-0.14904 0.4438,0.0943 0.6323,0 0.4611,-0.23055 0.5058,-0.50577 0.6323,-0.63232 0.1491,-0.14904 0.4438,0.0943 0.6324,0 0.1333,-0.0666 0.1828,-0.24951 0.3161,-0.31616 0.335,-0.16751 0.9064,0.11941 1.2647,0 1.4534,-0.4845 3.4214,-0.51966 4.11,-1.89696 0.2666,-0.53316 -0.4052,-2.124 0,-2.52927 0.074,-0.0745 0.2417,0.0745 0.3162,0 0.4243,-0.42429 -0.1306,-3.10666 -0.3162,-3.47775 -0.1054,-0.21078 -0.7377,-0.84309 -0.9485,-0.94848 -0.5634,-0.28174 -1.6942,0.34592 -2.2131,0 -0.196,-0.13072 -0.1495,-0.46569 -0.3161,-0.63232 -0.256,-0.256 -1.5291,0.12263 -1.897,0 -0.4733,-0.15777 -1.7191,-0.77064 -1.8969,-0.94848 -0.075,-0.0745 0.074,-0.24164 0,-0.31616 -0.1491,-0.14903 -0.4833,0.14904 -0.6324,0 -0.037,-0.0371 0,-3.5954 0,-3.79391 0,-0.31616 -0.2235,-0.72492 0,-0.94847 0.075,-0.0745 0.2691,0.0943 0.3162,0 0.2456,-0.49111 0.4277,-3.27318 0.6323,-3.47776 0.1581,-0.15808 0.4743,-0.15808 0.6323,-0.31616 0.1491,-0.14903 -0.149,-0.48327 0,-0.63231 0.2304,-0.23041 1.269,-0.004 1.5808,-0.31616 0.075,-0.0745 -0.074,-0.24164 0,-0.31616 0.2087,-0.20864 1.0138,-0.44665 1.2647,-0.94848 0.047,-0.0943 -0.094,-0.26903 0,-0.31616 0.1885,-0.0943 0.4438,0.0943 0.6323,0 0.1885,-0.0943 -0.149,-0.48328 0,-0.63232 0.074,-0.0745 0.2416,0.0745 0.3162,0 0.2072,-0.20727 0.1577,-1.10624 0.3161,-1.26463 0.7465,-0.74649 -0.1663,1.76344 0.6323,-0.63232 0.067,-0.19996 -0.1885,-0.53806 0,-0.63232 0.1886,-0.0943 0.4438,0.0943 0.6323,0 0.094,-0.0471 -0.074,-0.24164 0,-0.31616 0.075,-0.0745 0.2219,0.0471 0.3162,0 1.3158,-0.65789 -0.338,0.0218 0.3162,-0.63232 0.074,-0.0745 0.2416,0.0745 0.3161,0 0.6542,-0.65414 -0.9996,0.0256 0.3162,-0.63232 0.1916,-0.0958 0.816,-0.18367 0.9485,-0.31616 0.074,-0.0745 -0.075,-0.24164 0,-0.31616 0.3224,-0.32245 1.8906,0.006 2.2131,-0.31616 0.075,-0.0745 -0.094,-0.26902 0,-0.31616 0.2529,-0.12646 0.6955,0.12647 0.9485,0 0.2666,-0.1333 0.3657,-0.49901 0.6323,-0.63231 0.7069,-0.35346 3.2677,-0.10616 3.4777,-0.31616 0.074,-0.0745 -0.074,-0.24164 0,-0.31616 0.2635,-0.26347 1.3174,0.26346 1.5808,0 0.074,-0.0745 -0.074,-0.24164 0,-0.31616 0.2521,-0.25211 1.5586,-0.0906 1.897,-0.31616 0.248,-0.16534 0.3843,-0.46698 0.6323,-0.63232 0.1754,-0.11691 0.4324,0.0666 0.6323,0 0.7927,-0.26424 1.5356,-0.60973 2.2131,-0.94848 0.3758,-0.18786 0.7285,-1.14081 0.9485,-1.58079 0.1265,-0.25293 -0.1265,-0.69555 0,-0.94848 0.031,-0.0616 0.5637,-0.24756 0.6323,-0.31616 0.3297,-0.32964 0.7677,-2.30289 0.9485,-2.84543 0.3223,-0.96681 0.584,-0.58398 0.9485,-0.94848 0.1832,-0.18325 0.4491,-1.08139 0.6323,-1.26464 0.075,-0.0745 0.2416,0.0745 0.3162,0 0.149,-0.14904 -0.094,-0.4438 0,-0.63232 0.2965,-0.59316 0.4055,-0.13519 0.9484,-0.31616 0.5869,-0.1956 0.08,-0.67243 0.6324,-0.94847 0.4023,-0.20117 2.1596,-1.17223 2.5292,-1.26464 0.2045,-0.0511 0.4324,0.0666 0.6323,0 0.4915,-0.16381 0.793,-0.71265 1.2647,-0.94848 0.1885,-0.0943 0.4438,0.0943 0.6323,0 0.094,-0.0471 -0.074,-0.24164 0,-0.31616 0.2005,-0.20054 1.0014,0.13162 1.2646,0 0.1333,-0.0666 0.1829,-0.2495 0.3162,-0.31616 0.6475,-0.32376 2.0847,0 2.8454,0 0.2108,0 0.4833,-0.14904 0.6324,0 0.074,0.0745 -0.075,0.24164 0,0.31616 0.2005,0.20055 1.0014,-0.13161 1.2646,0 0.1333,0.0666 0.1748,0.26903 0.3161,0.31616 1.0434,0.34778 2.4345,-0.34777 3.4778,0 2.2901,0.76336 -0.4985,-0.0911 0.9485,0.63232 0.1751,0.0876 3.8942,0.0863 4.11,0 0.4376,-0.17504 0.8431,-0.42155 1.2647,-0.63232 z"/>
            </svg>

            <div className="tootip">
                
            </div>
        </div>
    )
}

export default Europe;