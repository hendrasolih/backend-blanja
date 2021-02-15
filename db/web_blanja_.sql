-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 15, 2021 at 05:51 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_blanja`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `address`, `user_id`) VALUES
(1, 'Jl. Babakan Jeruk 1 Bandung', 12),
(2, 'Jl Baladewa No 1 Bandung', 20),
(29, 'Jl. Padajaran Bandung Jawa Barat 40781', 20),
(30, 'Jl. Pajajaran No. 2 Bandung Jabar 40891', 20);

-- --------------------------------------------------------

--
-- Table structure for table `category_product`
--

CREATE TABLE `category_product` (
  `ctg_id` int(11) NOT NULL,
  `ctg_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category_product`
--

INSERT INTO `category_product` (`ctg_id`, `ctg_name`) VALUES
(1, 'Shoes'),
(3, 'Shirt'),
(4, 'Short'),
(5, 'Jacket'),
(6, 'Pants'),
(7, 'Backpack'),
(8, 'Handbag'),
(9, 'Watch');

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `id` int(11) NOT NULL,
  `color_type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`id`, `color_type`) VALUES
(1, 'Merah'),
(2, 'Kuning'),
(3, 'Hijau'),
(4, 'Biru'),
(5, 'Coklat'),
(6, 'Abu - Abu'),
(7, 'Hitam');

-- --------------------------------------------------------

--
-- Table structure for table `conditions`
--

CREATE TABLE `conditions` (
  `cndtn_id` int(11) NOT NULL,
  `cndtn_type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `conditions`
--

INSERT INTO `conditions` (`cndtn_id`, `cndtn_type`) VALUES
(1, 'New'),
(2, 'Second');

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int(11) NOT NULL,
  `invoice_id` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `invoice_id`, `user_id`, `qty`, `price`, `seller_id`, `status`) VALUES
(13, 'INV/2021/20/20q36P', 20, 5, 8800000, 12, 'Delivered'),
(14, 'INV/2021/20/hhtHMK', 20, 3, 4800000, 12, 'Delivered'),
(15, 'INV/2021/20/PS1zkZ', 20, 3, 6800000, 12, 'Delivered'),
(16, 'INV/2021/20/xAZfeL', 20, 3, 4350000, 12, 'Delivered'),
(17, 'INV/2021/20/dCyO6g', 20, 1, 2000000, 12, 'Delivered'),
(18, 'INV/2021/20/mGgYKv', 20, 2, 1150000, 12, 'Shipping'),
(19, 'INV/2021/20/X73C5a', 20, 1, 3000000, 12, 'Packing'),
(20, 'INV/2021/20/pNW2VC', 20, 1, 3000000, 12, 'Packing');

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `level` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `level`) VALUES
(1, 'Seller'),
(2, 'Customer');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `prd_id` int(11) NOT NULL,
  `prd_name` varchar(100) NOT NULL,
  `prd_brand` varchar(100) NOT NULL,
  `prd_price` int(11) NOT NULL,
  `cndtn_id` int(11) NOT NULL,
  `prd_description` varchar(255) NOT NULL,
  `size_id` int(11) NOT NULL,
  `prd_image` varchar(255) NOT NULL,
  `prd_ctg` int(11) NOT NULL,
  `prd_rating` float NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`prd_id`, `prd_name`, `prd_brand`, `prd_price`, `cndtn_id`, `prd_description`, `size_id`, `prd_image`, `prd_ctg`, `prd_rating`, `user_id`, `created_at`, `updated_at`) VALUES
(4, 'Compass Brand Lokal', 'Compass', 3000000, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 1, '[\"/images/1610347171907-image.jpg\"]', 1, 4.5, 12, '2020-11-23', '2020-11-23'),
(5, 'New Balance 999 Classic Shoes', 'New Balance', 2000000, 1, 'Sepatu Trendy cocok untuk aktivitas harian', 1, '[\"/images/1608115028199-image.jpg\"]', 1, 4.9, 12, '2020-11-23', '2021-01-21'),
(6, 'Sepatu Adidas Ultra Booster', 'Adidas', 2000000, 1, 'Sepatu Trendy cocok untuk aktivitas harian', 4, '[\"/images/1608115603010-image.jpg\"]', 1, 4.4, 12, '2020-11-23', '2021-01-21'),
(17, 'Jacket Nike', 'Nike', 550000, 1, 'Nyaman dipakai setiap hari senin  sampai jum\'at', 9, '[\"/images/1608135747310-image.jpg\",\"/images/1608135747311-image.jpg\"]', 5, 4.7, 12, '2020-12-01', '2020-12-01'),
(18, 'Tas Eiger', 'Eiger', 550000, 1, 'Awet dipakai ke gunung atau pantai', 9, '[\"/images/1608135757285-image.jpg\",\"/images/1608135757287-image.jpg\"]', 7, 4.7, 12, '2020-12-01', '2020-12-01'),
(21, 'Nike Shirt', 'Nike', 150111, 1, 'Baju Baru Alhamdulillah', 5, '[\"/images/1608135767522-image.jpg\",\"/images/1608135767523-image.jpg\"]', 3, 4.7, 3, '2020-12-02', '2020-12-08'),
(23, 'Celana Pendek Eiger', 'Eiger', 99000, 1, 'Pendek tapi tahan lama', 5, '[\"/images/1608135780046-image.jpg\",\"/images/1608135780046-image.jpg\"]', 4, 5, 3, '2020-12-02', '2020-12-02'),
(24, 'Celana Jeans Levis Ori', 'Levis', 250000, 1, 'Gaul dan Kekinian', 5, '[\"/images/1608135782979-image.jpg\",\"/images/1608135782982-image.jpg\"]', 6, 5, 3, '2020-12-02', '2020-12-02'),
(25, 'Watch Man Series123', 'Timex', 800000, 1, 'For Adventure Man', 5, '[\"/images/1610346741333-image.jpg\"]', 9, 4.5, 12, '2020-12-02', '2020-12-06'),
(26, 'Tas Eiger 2.0', 'Eiger', 895623, 1, 'baggus banget', 5, '[\"/images/1608135806670-image.jpg\",\"/images/1608135806671-image.jpg\"]', 4, 4.5, 3, '2020-12-02', '2020-12-07'),
(27, 'Celana Adidas', 'Adidas', 800000, 1, 'Awet Baru', 5, '[\"/images/1608135931310-image.jpg\",\"/images/1608135931310-image.jpg\"]', 4, 4.5, 12, '2020-12-07', '2020-12-16'),
(28, 'tas baru', 'nike', 200000, 1, 'anti hujan', 5, '[\"/images/1608135934897-image.jpg\",\"/images/1608135934897-image.jpg\"]', 4, 4.5, 3, '2020-12-04', '2020-12-04'),
(29, 'New Balance 991 Classic Shoes', 'New Balance', 2000000, 1, 'Sepatu Trendy cocok untuk aktivitas harian', 1, '[\"/images/1608115140449-image.jpg\"]', 1, 4.9, 12, '2020-12-05', '2020-12-16'),
(31, 'Tas Adidas 1', 'Adidas wakabayasi', 350000, 1, 'test masuk ga ya', 5, '[\"/images/1607533655137-image.jpg\",\"/images/1607533655138-image.jpg\"]', 1, 4.5, 3, '2020-12-08', '2020-12-08'),
(33, 'sepatu nb merah', 'Nb', 80000, 1, 'test masuk ga ya', 5, '[\"/images/1608082412690-image.jpg\"]', 1, 4.5, 3, '2020-11-23', '2020-11-23'),
(34, 'sepatu nb yellow', 'Nb', 800364, 1, 'Bisa Ayo', 5, '[\"/images/1607440306209-image.jpg\",\"/images/1607440306211-image.jpg\"]', 1, 4.5, 12, '2020-12-08', '2020-12-08'),
(37, 'Yoki Black Formal', 'Yongki', 800364, 1, 'Bisa Ayo', 5, '[\"/images/1607528204581-image.jpg\",\"/images/1607528204582-image.jpg\"]', 1, 4.5, 3, '2020-12-09', '2020-12-09'),
(38, 'Yongki Brown Casual', 'Yongki', 800364, 1, 'Bisa Ayo', 5, '[\"/images/1607532188974-image.jpg\",\"/images/1607532188975-image.jpg\"]', 1, 4.5, 3, '2020-12-09', '2020-12-09'),
(39, 'Mercurial Assist v.99', 'Nike', 800364, 1, 'Bisa Ayo', 5, '[\"/images/1607532267607-image.jpg\",\"/images/1607532267608-image.jpg\"]', 1, 4.5, 3, '2020-12-09', '2020-12-09'),
(40, 'Adidas', 'Adidas wakabayasi', 350000, 1, 'Bisa Ayo', 5, '[\"/images/1608114191781-image.jpg\"]', 1, 4.5, 3, '2020-11-23', '2021-01-05'),
(41, 'test tas image array 22', 'Nike', 800364, 1, 'Bisa Ayo', 5, '[\"/images/1607579652767-image.jpg\",\"/images/1607579652768-image.jpg\"]', 1, 4.5, 3, '2020-11-23', '2021-01-05'),
(42, 'Nike New', 'Nike', 700364, 1, 'Bisa Ayo', 5, '[\"/images/1607580110330-image.jpg\",\"/images/1607580110332-image.jpg\"]', 1, 4.5, 3, '2020-11-23', '2021-01-05'),
(43, 'test tas image array 23', 'Adidas wakabayasi', 800364, 1, 'Bisa Ayo', 5, '[\"/images/1608115095443-image.jpg\"]', 1, 4.5, 3, '2020-11-23', '2021-01-05'),
(47, 'Tas Eiger 2.1', 'uniqlo', 500000, 1, 'baggus banget', 5, '[\"/images/1608042671143-image.jpg\"]', 1, 4.5, 3, '2020-11-23', '2021-01-05'),
(48, 'Tas Eiger 2.1', 'uniqlo', 500000, 1, 'baggus banget', 5, '[\"/images/1608027193732-image.jpg\"]', 1, 4.5, 3, '2020-11-23', '2021-01-05'),
(49, 'Tas Eiger 2.0', 'uniqlo', 500000, 1, 'baggus banget', 5, '[\"/images/1608041935645-image.jpg\"]', 1, 4.5, 3, '2021-02-15', '2021-02-15'),
(92, 'Tas Rei', 'Rei New', 600090, 0, 'Tas untuk sehari hari', 0, '[\"/images/1611195458337-image.jpg\",\"/images/1611195458345-image.jpg\"]', 7, 0, 12, '2021-01-21', '2021-01-21'),
(95, 'Nike Black', 'Nike', 500000, 0, 'New Product', 0, '[\"/images/1611808613758-image.jpg\",\"/images/1611808613763-image.jpg\"]', 1, 0, 12, '2021-01-28', '2021-01-28');

-- --------------------------------------------------------

--
-- Table structure for table `product_color`
--

CREATE TABLE `product_color` (
  `pc_id` int(11) NOT NULL,
  `prd_id` int(11) NOT NULL,
  `clr_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_color`
--

INSERT INTO `product_color` (`pc_id`, `prd_id`, `clr_id`) VALUES
(1, 4, 4),
(2, 4, 5),
(3, 5, 1),
(4, 5, 2),
(5, 6, 3),
(6, 6, 4),
(7, 7, 5),
(8, 7, 6),
(9, 8, 7),
(10, 8, 7),
(11, 9, 5),
(12, 9, 3),
(13, 10, 4),
(14, 10, 1),
(15, 8, 2),
(16, 9, 6),
(17, 12, 4),
(18, 13, 5),
(19, 23, 5),
(20, 95, 1),
(21, 95, 2),
(22, 95, 3),
(23, 92, 6),
(24, 27, 1),
(25, 29, 4),
(26, 17, 5),
(27, 25, 5);

-- --------------------------------------------------------

--
-- Table structure for table `product_size`
--

CREATE TABLE `product_size` (
  `ps_id` int(11) NOT NULL,
  `prd_id` int(11) NOT NULL,
  `sz_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_size`
--

INSERT INTO `product_size` (`ps_id`, `prd_id`, `sz_id`) VALUES
(0, 12, 8),
(1, 4, 5),
(2, 4, 6),
(3, 5, 3),
(4, 5, 4),
(5, 5, 5),
(6, 6, 1),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10),
(12, 13, 9),
(13, 12, 8),
(14, 12, 9),
(23, 9, 3),
(24, 23, 9),
(25, 95, 1),
(27, 95, 3),
(28, 92, 10),
(29, 27, 7),
(30, 27, 8),
(31, 27, 9),
(32, 29, 1),
(33, 29, 6),
(34, 25, 9);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `review` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `prd_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `review`, `user_id`, `prd_id`, `rating`) VALUES
(1, 'nyaman dipakai', 12, 4, 4),
(4, 'nyaman dipakai 2', 11, 4, 5),
(9, 'Barang sangat bagus banget', 10, 4, 5),
(13, 'Rating Baru nih', 12, 5, 5),
(14, 'bisa berjalan dengan baik', 20, 5, 4),
(15, '', 12, 84, 0),
(16, 'test', 20, 6, 5),
(18, 'Test 12378', 12, 6, 3);

-- --------------------------------------------------------

--
-- Table structure for table `room_list`
--

CREATE TABLE `room_list` (
  `id` int(11) NOT NULL,
  `cus_id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `room_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room_list`
--

INSERT INTO `room_list` (`id`, `cus_id`, `seller_id`, `room_id`) VALUES
(6, 20, 12, 'c20s12');

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `size_id` int(11) NOT NULL,
  `size_prd` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`size_id`, `size_prd`) VALUES
(1, '42'),
(3, '38'),
(4, '39'),
(5, '40'),
(6, '41'),
(7, 'S'),
(8, 'M'),
(9, 'L'),
(10, 'XL');

-- --------------------------------------------------------

--
-- Table structure for table `tb_chat`
--

CREATE TABLE `tb_chat` (
  `id` int(11) NOT NULL,
  `chatMessage` varchar(255) NOT NULL,
  `sender` varchar(255) NOT NULL,
  `senderName` varchar(255) NOT NULL,
  `room_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_chat`
--

INSERT INTO `tb_chat` (`id`, `chatMessage`, `sender`, `senderName`, `room_id`) VALUES
(2, 'Hello', '20', 'zia', 'c20s12'),
(3, 'Barangnya Ready kaka ?', '20', 'zia', 'c20s12'),
(4, 'Ready Kak', '12', 'hendra', 'c20s12'),
(5, 'Silahkan di order :)', '12', 'hendra', 'c20s12');

-- --------------------------------------------------------

--
-- Table structure for table `tb_otp`
--

CREATE TABLE `tb_otp` (
  `id` int(11) NOT NULL,
  `otp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_otp`
--

INSERT INTO `tb_otp` (`id`, `otp`) VALUES
(29, 'fUF86L');

-- --------------------------------------------------------

--
-- Table structure for table `token_blacklist`
--

CREATE TABLE `token_blacklist` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `token_whitelist`
--

CREATE TABLE `token_whitelist` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `token_whitelist`
--

INSERT INTO `token_whitelist` (`id`, `token`) VALUES
(135, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbmRyYS5zb2xpaC5qcEBnbWFpbC5jb20iLCJsZXZlbCI6IlNlbGxlciIsImlhdCI6MTYxMjk2NzAxOX0.uIGuzV57Xzqjl5QiksawjMeVx4V8HG-0Q31aPZ5a3kU'),
(105, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbmRyYS5zb2xpaC5qcEBnbWFpbC5jb20iLCJsZXZlbCI6IlNlbGxlciIsImlhdCI6MTYxMTcyNjQyOH0.RD1dvetjxKcf7R0JDb9p16FgMoQGCslydq1XroxVmXw'),
(106, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbmRyYS5zb2xpaC5qcEBnbWFpbC5jb20iLCJsZXZlbCI6IlNlbGxlciIsImlhdCI6MTYxMTcyNjU2N30.V8kn6bLpMVYjfVH-awoph9iJ7tg8IazAot6sz0l1IE4'),
(111, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbmRyYS5zb2xpaC5qcEBnbWFpbC5jb20iLCJsZXZlbCI6IlNlbGxlciIsImlhdCI6MTYxMTcyNzgzMH0.2xUjhq4FskLRCxu-w7lDiawCpM8uDlzxMMTV3e0q8Aw'),
(151, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbmRyYS5zb2xpaC5qcEBnbWFpbC5jb20iLCJsZXZlbCI6IlNlbGxlciIsImlhdCI6MTYxMzA1NjE3MiwiZXhwIjoxNjEzMTQyNTcyfQ.7ZcpDfM6aIvHQ9qERadaSh3LBnLssz9Ac8G2NIcgHE8'),
(142, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbmRyYS5zb2xpaC5qcEBnbWFpbC5jb20iLCJsZXZlbCI6IlNlbGxlciIsImlhdCI6MTYxMzAzMzczMSwiZXhwIjoxNjEzMDMzNzkxfQ.VgQOCKW7spBUGzf3d7afOCVvk_On1eOyVhrL5FxBgxs'),
(143, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbmRyYS5zb2xpaC5qcEBnbWFpbC5jb20iLCJsZXZlbCI6IlNlbGxlciIsImlhdCI6MTYxMzAzNDAzMiwiZXhwIjoxNjEzMDM0MDkyfQ.uer_sMlH1Ft5f3roePqBVkQvRjA-ZP0ytJwcrjirRFA'),
(145, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbmRyYS5zb2xpaC5qcEBnbWFpbC5jb20iLCJsZXZlbCI6IlNlbGxlciIsImlhdCI6MTYxMzAzNDkyMSwiZXhwIjoxNjEzMDM0OTgxfQ.8nxQq4D6ngbpof77Fsn3y3YPf-blRVW_JJ3xbHNq8Jc'),
(144, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbmRyYS5zb2xpaC5qcEBnbWFpbC5jb20iLCJsZXZlbCI6IlNlbGxlciIsImlhdCI6MTYxMzAzNDY1NywiZXhwIjoxNjEzMDM0NzE3fQ.hgAjtD4P3WTbi8VFHzdDXFWcKOT438QAIoPbN2y0z6Y'),
(102, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppYUBnbWFpbC5jb20iLCJsZXZlbCI6IkN1c3RvbWVyIiwiaWF0IjoxNjExNDczNTEyfQ.cjJUIsA4zyI5pKN_MfX9bTo2GpkgQY6Kxvavavq5ZsU'),
(112, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppYUBnbWFpbC5jb20iLCJsZXZlbCI6IkN1c3RvbWVyIiwiaWF0IjoxNjExNzI3OTk3fQ.-UexkK7IczaVEFefahuy0YMfzQzlno2pQnMb5oisXFU'),
(122, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppYUBnbWFpbC5jb20iLCJsZXZlbCI6IkN1c3RvbWVyIiwiaWF0IjoxNjExNzUzODM2fQ.v_-ubifskCKEQ43CEsrrmFUiGmhkUX4OJ1Brvg6b6tM'),
(128, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppYUBnbWFpbC5jb20iLCJsZXZlbCI6IkN1c3RvbWVyIiwiaWF0IjoxNjExODA4ODExfQ.2cxhOvKv6ME-BKpIb6rutJkGehH9FScKD4sz1Noot1E'),
(140, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppYUBnbWFpbC5jb20iLCJsZXZlbCI6IkN1c3RvbWVyIiwiaWF0IjoxNjEzMDI0NTM4fQ.lFGWafRfxSmpCIoSbrqvKvDuLM9Ml6lnpw-bPXC2bUY'),
(138, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppYUBnbWFpbC5jb20iLCJsZXZlbCI6IkN1c3RvbWVyIiwiaWF0IjoxNjEzMDIzMzA3fQ.K-RlqgpsJE9b-6mGGwaIlx7oGVfDcd97FIzZICcxkHo'),
(139, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppYUBnbWFpbC5jb20iLCJsZXZlbCI6IkN1c3RvbWVyIiwiaWF0IjoxNjEzMDIzMzA5fQ.8yUp3mqYG_B0uTGb4IdgUURFhlFIESOq1d2cwBwUn78'),
(146, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppYUBnbWFpbC5jb20iLCJsZXZlbCI6IkN1c3RvbWVyIiwiaWF0IjoxNjEzMDM5NDQyLCJleHAiOjE2MTMwMzk1MDJ9.033j2uKyTMhVjhFXJOr0YtIzSjFuWn4tZ4qqH8UZX4s'),
(147, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppYUBnbWFpbC5jb20iLCJsZXZlbCI6IkN1c3RvbWVyIiwiaWF0IjoxNjEzMDQwNTgxLCJleHAiOjE2MTMwNDA2NDF9.k4X7nXYP6hIEyhWDe7Sm6FE65K3nMzW8rzaEUoJ_FwM'),
(150, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppYUBnbWFpbC5jb20iLCJsZXZlbCI6IkN1c3RvbWVyIiwiaWF0IjoxNjEzMDUzMDUxLCJleHAiOjE2MTMxMzk0NTF9.fQZTvQPbErkmOHgiUJxUQbPnFCwBmOiyp567XGtdEM8'),
(178, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppYUBnbWFpbC5jb20iLCJsZXZlbCI6IkN1c3RvbWVyIiwiaWF0IjoxNjEzMzYxNzc5LCJleHAiOjE2MTM0NDgxNzl9.8iRdVrwfBCajCnTQw-hl18hT-TMwQVNK4aDG7kNXkl0');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL,
  `store_name` varchar(255) DEFAULT NULL,
  `phone_num` varchar(255) DEFAULT NULL,
  `photo_user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `user_name`, `user_password`, `level_id`, `store_name`, `phone_num`, `photo_user`) VALUES
(3, 'mark01@gmail.com', 'mark01', '$2b$10$bCAfgXa4g.QQ4cF8/v0NMuDbYfEGdw24M4uJ9N6OUjl4DINJw09KW', 1, '', '', NULL),
(4, 'masbro@gmail.com', 'masbro', '$2b$10$xIwrfiwYfj.0kfkHBZKVB.40x7LChKINknBGZq0ZF90HiflnyBB1i', 2, '', '', NULL),
(6, 'masbro01@gmail.com', 'masbro01', '$2b$10$C7G6AJi85.EkI/M6CAtj..Istys0lx3DeofkUc0sy43WwNpsHhpti', 2, '', '', NULL),
(7, 'masbro02@gmail.com', 'masbro02', '$2b$10$qM2coXB9NnqqSXHHBml4TOoBbHJT7GiL.4jx35ZTNZoT1yDUSQ4wa', 2, '', '', NULL),
(8, 'user@gmail.com', 'usertest', '$2b$10$0VYeFvmSMQbg3j4DWfkbrOwUHu3.2zSaneLRuIm4.X/yGWwYk/L1.', 2, '', '', NULL),
(9, 'ak@mail.com', 'aku', '$2b$10$M9Bxo8lZ.iVhbi5g4ukKZeArIl937pAhPy0vz.h0o9G0/8.4PFZrO', 2, 'ak store', '0852', NULL),
(10, 'bro@mail.com', 'bro', '$2b$10$AOKQqCk76qC7y6CWY.xqbu4CloAcDDdGmnJtVQxiFx606JtZjvx0e', 2, 'store bro', '123', NULL),
(11, 'demo@mail.com', 'demo', '$2b$10$cBtLysTtZhgrlaSh.0O7eO9kbEL0GSlnv5/S.xeWvmaK2CT0vmD82', 2, 'demo store', '123', NULL),
(12, 'hendra.solih.jp@gmail.com', 'hendra', '$2b$10$P3wcdI4OhoHIwfShM5IsAu64VIK64vi403o8CjC.x7QJpvRYZLas2', 1, NULL, NULL, 'https://i.imgur.com/OsyDmHm.jpg'),
(20, 'zia@gmail.com', 'zia', '$2b$10$FuNbDUZvBX7e658JfSg33OW0OAC1dTIg.GnbJ5oB7BhrW.KTgNmwm', 2, NULL, NULL, NULL),
(24, 'leh@mail.com', 'leh', '$2b$10$qNgwG9wCyYn7Gq5nDKYDOuiXVHhQlySqrhrXFb.BYNQJ88kh7m9WS', 1, 'leh store', NULL, NULL),
(25, 'cus@mail.com', 'cus', '$2b$10$d.POAr6fct25i82qkMWv7usiZ1/.fN78QhU/xfrcMh.i0Evh3tn36', 2, '', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_product`
--
ALTER TABLE `category_product`
  ADD PRIMARY KEY (`ctg_id`);

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `conditions`
--
ALTER TABLE `conditions`
  ADD PRIMARY KEY (`cndtn_id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`prd_id`);

--
-- Indexes for table `product_color`
--
ALTER TABLE `product_color`
  ADD PRIMARY KEY (`pc_id`);

--
-- Indexes for table `product_size`
--
ALTER TABLE `product_size`
  ADD PRIMARY KEY (`ps_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`prd_id`);

--
-- Indexes for table `room_list`
--
ALTER TABLE `room_list`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `room_id` (`room_id`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`size_id`);

--
-- Indexes for table `tb_chat`
--
ALTER TABLE `tb_chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_otp`
--
ALTER TABLE `tb_otp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `token_blacklist`
--
ALTER TABLE `token_blacklist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `token_whitelist`
--
ALTER TABLE `token_whitelist`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `category_product`
--
ALTER TABLE `category_product`
  MODIFY `ctg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `conditions`
--
ALTER TABLE `conditions`
  MODIFY `cndtn_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `prd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `product_color`
--
ALTER TABLE `product_color`
  MODIFY `pc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `product_size`
--
ALTER TABLE `product_size`
  MODIFY `ps_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `room_list`
--
ALTER TABLE `room_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tb_chat`
--
ALTER TABLE `tb_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tb_otp`
--
ALTER TABLE `tb_otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `token_blacklist`
--
ALTER TABLE `token_blacklist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `token_whitelist`
--
ALTER TABLE `token_whitelist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=179;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
