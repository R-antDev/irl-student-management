import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { clsx } from "clsx";
import Select from "react-select";

export default function Create({ auth, permissions }) {

    const options = permissions.data.map((permission) => {
        return {
            value: permission.id,
            label: permission.title,
        };
    });

    const { data, setData, post, processing, errors } = useForm({
        title: "",
        selectedPermissions: [],
    });

    function submit(e) {
        e.preventDefault();
        post(route("roles.store"), {
            preserveScroll: true,
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Role
                </h2>
            }
        >
            <Head title="Add Role" />

            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
                        <form onSubmit={submit}>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Role Information
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Use this form to create a new Role.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="title"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                id="title"
                                                className={clsx(
                                                    `mt-1 block w-full border rounded-md shadow-sm py-2 px-3 sm:text-sm`,
                                                    errors.title &&
                                                        "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300",
                                                    !errors.title &&
                                                        "focus:ring-indigo-500 border-gray-300 focus:border-indigo-500 focus:outline-none"
                                                )}
                                                value={data.title}
                                                onChange={(e) =>
                                                    setData(
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.title}
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="permission"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Permissions
                                            </label>
                                            <Select
                                                isMulti
                                                id="permission"
                                                onChange={(selectedPermissions) => {
                                                    setData('selectedPermissions', selectedPermissions)
                                                }}
                                                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm`}
                                                options={options}
                                            />
                                            <InputError
                                                message={errors.title}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <Link
                                        href={route("roles.index")}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        {processing ? "Submiting..." : "Save"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
