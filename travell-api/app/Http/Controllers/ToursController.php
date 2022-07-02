<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ToursController extends Controller
{
    //get all tours
    public function getTours(): array
    {
        $query = "
            SELECT t.* FROM travel.tours as t
        ";

        return DB::select($query);
    }

    // search tours by a keyword
    public function searchTours(Request $request)
    {
        $keyword = $request->keyword ?? "";

        $keyword = "
            SELECT * FROM travel.tours as tt
            WHERE tt.tour_title LIKE '%${keyword}%' OR tt.tour_location LIKE '%${keyword}%'
        ";

        return DB::select($keyword);
    }

    public function getConditionalTours(Request $request)
    {
        $priceRange = count($request->price_range) == 0 ? null : $request->price_range;
        $priceCondition = $priceRange != null || $priceRange != "" || $priceRange != []
            ? "AND (CAST(t.tour_price AS DECIMAL(10,2)) BETWEEN ${priceRange[0]} AND ${priceRange[1]})"
            : "";

        $supplier = $request->suppliers ?? [];
        $supplierSqlEnum = implode(',', $supplier);
        $supplierCondition = $supplier != null || $supplier != []
            ? "AND (t.supplier_id IN ($supplierSqlEnum))"
            : "";

        $location = $conditions['location'] ?? null;
        $locationCondition = $location != null || $location != ""
            ? "AND (t.tour_location LIKE '%${location}%')"
            : "";

        $query = "
            SELECT t.* FROM travel.tours as t
            JOIN travel.suppliers s on s.supplier_id = t.supplier_id
            WHERE (TRUE $priceCondition $supplierCondition $locationCondition)
            GROUP BY t.tour_id
        ";

        return DB::select($query);
    }
}
