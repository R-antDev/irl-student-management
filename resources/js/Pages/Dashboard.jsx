import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, totalStudents, totalClasses }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className=" flex space-x-6 justify-center sm:px-6 lg:px-8">
                    <div className="bg-teal-300 overflow-hidden shadow-sm sm:rounded-lg w-44 h-40">
                        <div className="p-6 text-gray-900 flex flex-col justify-center h-full">
                            <p className="text-lg">Total Students</p>
                            <p className="text-3xl font-bold">
                                {totalStudents.data.length}
                            </p>
                        </div>
                    </div>
                    <div className="bg-purple-300 overflow-hidden shadow-sm sm:rounded-lg w-44 h-40">
                        <div className="p-6 text-gray-900 flex flex-col justify-center h-full">
                            <p className="text-lg">Total Class</p>
                            <p className="text-3xl font-bold">
                                {totalClasses}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
